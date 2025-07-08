import 'reflect-metadata'
import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import { join } from 'node:path'
import type { Environment } from 'vitest/environments'
import { container } from 'tsyringe'
import { EnvConfig } from '../../src/configs/env.config'
import { PrismaClient } from '@prisma/client'


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
    const env = container.resolve(EnvConfig)
    const databaseUrl = generateDatabaseUrl(env, schema)

    // Atualiza a URL do banco para o schema de teste
    process.env.DATABASE_URL = databaseUrl
    process.env.PRISMA_CLIENT_NO_HINTS = 'true'

    // Executa as migrações no schema de teste
    execSync('npx prisma generate', {
      stdio: 'inherit',
      env: { ...process.env, DATABASE_URL: databaseUrl }
    })
    
    // Faz o push do schema para criar o banco de teste
    execSync('npx prisma db push --accept-data-loss --force-reset', {
      stdio: 'inherit',
      env: { ...process.env, DATABASE_URL: databaseUrl }
    })

    // Cria uma nova instância do PrismaClient para os testes
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    })

    return {
      async teardown() {
        // Apaga o schema de teste
        await prisma.$executeRaw`DROP SCHEMA IF EXISTS "${schema}" CASCADE`
        await prisma.$disconnect()
      },
    }
  },
}
