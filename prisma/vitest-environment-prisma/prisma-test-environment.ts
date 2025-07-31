import 'reflect-metadata'
import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import type { Environment } from 'vitest/environments'
// Removido import antecipado do container para evitar carregar PrismaClient antes da alteração da DATABASE_URL
import { EnvConfig } from '../../src/configs/env.config'
import { PrismaConfig } from '../../src/configs/prisma.config'

function generateDatabaseUrl(env: EnvConfig, schema: string) {

  if (!env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL env variable')
  }

  // Garantir que estamos usando localhost para testes
  const url = new URL(env.DATABASE_URL)

  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',
  async setup() {
    const schema = randomUUID()

    // Salvar a URL original do banco ANTES de qualquer alteração
    const originalDatabaseUrl = process.env.DATABASE_URL

    // Resolver o EnvConfig inicial apenas para obter a URL base
    const initialEnv = new EnvConfig()
    const databaseUrl = generateDatabaseUrl(initialEnv, schema)

    // Atualizar as variáveis de ambiente ANTES de limpar o container
    process.env.DATABASE_URL = databaseUrl
    process.env.DATABASE_URL_LOCAL = databaseUrl
    process.env.PRISMA_CLIENT_NO_HINTS = 'true'

    // Limpar o cache do container APÓS alterar as variáveis de ambiente
    const { container } = await import('tsyringe');
    container.clearInstances()

    try {
      // Executa as migrações no schema de teste
      execSync('npx prisma generate', {
        stdio: 'inherit',
        env: { ...process.env, DATABASE_URL: databaseUrl },
      })

      // Faz o push do schema para criar o banco de teste
      execSync('npx prisma db push --accept-data-loss --force-reset', {
        stdio: 'inherit',
        env: { ...process.env, DATABASE_URL: databaseUrl },
      })
    } catch (error) {
      console.error('Erro ao executar comandos do Prisma:', error)
      throw error
    }

    // Limpar completamente o container
    container.clearInstances()

    // Alterar a variável de ambiente para usar o schema de teste
    process.env.DATABASE_URL = databaseUrl

    // Recriar o EnvConfig com a URL atualizada
    const testEnvConfig = new EnvConfig()
    // Forçar a propriedade DATABASE_URL para usar a URL com schema
    Object.defineProperty(testEnvConfig, 'DATABASE_URL', {
      value: databaseUrl,
      writable: false,
      enumerable: true,
      configurable: true
    })

    // Criar PrismaClient com a URL correta (com schema)
    const { PrismaClient } = await import('../../src/generated/prisma')
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
      // @ts-ignore – acessando API interna somente em ambiente de teste
      __internal: {
        engine: {
          overrideDatasources: {
            db: {
              url: databaseUrl,
            },
          },
        },
      },
    } as any)


    // Criar um PrismaConfig customizado que usa o PrismaClient com schema correto
    const testPrismaConfig = {
      prismaClient: prisma,
      envConfig: testEnvConfig
    }

    // Registrar as instâncias no container
    container.registerInstance(EnvConfig, testEnvConfig)
    container.registerInstance(PrismaConfig, testPrismaConfig as any)

    return {
      async teardown() {
        try {          
          // Apaga o schema de teste
          await prisma.$executeRaw`DROP SCHEMA IF EXISTS "${schema}" CASCADE`
          await prisma.$disconnect()

          // Restaurar a URL original do banco
          process.env.DATABASE_URL = originalDatabaseUrl

          // Limpar novamente o cache do container após os testes
          const { container } = await import('tsyringe');
          container.clearInstances()

        } catch (error) {
          console.error(`Erro ao limpar schema de teste ${schema}:`, error)
        }
      },
    }
  },
}
