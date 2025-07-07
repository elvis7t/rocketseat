import 'reflect-metadata'
import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import type { Environment } from 'vitest/environments'
import { container } from 'tsyringe'
import { EnvConfig } from '../../src/configs/env.config'
import { PrismaConfig } from '../../src/configs/prisma.config'

function generateDatabaseUrl(env: EnvConfig, schema: string) {
  if (!env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL env variable')
  }

  // Garantir que estamos usando localhost para testes
  // const url = new URL(env.DATABASE_URL.replace('db:', 'localhost:'))
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
    execSync('npx prisma generate', { stdio: 'inherit' })
    execSync('npx prisma migrate deploy', { stdio: 'inherit' })

    // Usa o PrismaConfig para gerenciar a conexão
    const prismaConfig = container.resolve(PrismaConfig)
    const prisma = prismaConfig.getClient()

    return {
      async teardown() {
        // Apaga o schema de teste
        await prisma.$executeRaw`DROP SCHEMA IF EXISTS "${schema}" CASCADE`
        await container.resolve(PrismaConfig).disconnect()
      },
    }
  },
}
