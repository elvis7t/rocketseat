import 'reflect-metadata'
import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import type { Environment } from 'vitest/environments'
import { container } from 'tsyringe'
import { EnvConfig } from '../../src/configs/env.config'

function generateDatabaseUrl(env: EnvConfig, schema: string) {
  console.log('Teste', env.DATABASE_URL)

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
    const env = container.resolve(EnvConfig)
    const databaseUrl = generateDatabaseUrl(env, schema)

    // Atualiza a URL do banco para o schema de teste
    // Salvar a URL original para restaurar depois
    const originalDatabaseUrl = process.env.DATABASE_URL
    process.env.DATABASE_URL = databaseUrl
    process.env.PRISMA_CLIENT_NO_HINTS = 'true'

    // Limpar o cache do container para forçar novas instâncias com o novo DATABASE_URL
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

    // Cria uma nova instância do PrismaClient para os testes
    // Importação dinâmica com dynamic import para garantir que estamos usando a versão mais recente
    const prismaModule = await import('../../src/generated/prisma')
    const prisma = new prismaModule.PrismaClient({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    })

    return {
      async teardown() {
        try {
          console.log(`Limpando schema de teste: ${schema}`)
          // Apaga o schema de teste
          await prisma.$executeRaw`DROP SCHEMA IF EXISTS "${schema}" CASCADE`
          await prisma.$disconnect()

          // Limpar novamente o cache do container após os testes
          container.clearInstances()

          console.log(`Schema de teste ${schema} removido com sucesso`)
        } catch (error) {
          console.error(`Erro ao limpar schema de teste ${schema}:`, error)
        }
      },
    }
  },
}
