import { test, beforeAll, afterAll, describe, expect, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { main } from '../app'
import { container } from 'tsyringe'
import { PrismaConfig } from '../configs/prisma.config'

const { app } = main()
describe('Register (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(async () => {
    const prisma = container.resolve(PrismaConfig).getClient()
    await prisma.user.deleteMany()
  })

  test('should be able to register', async () => {
    const response = await request(app.server).post('/v1/user').send({
      name: 'John Doe',
      email: 'john.does@example.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(201)
  })

  test('should not be able to register with existing email', async () => {
    // Primeiro cadastro com este email
    await request(app.server).post('/v1/user').send({
      name: 'John Doe',
      email: 'john.does@example.com',
      password: '123456',
    })

    // Tentativa de cadastro com email já existente
    const response = await request(app.server).post('/v1/user').send({
      name: 'John Doe Duplicate',
      email: 'john.does@example.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(409)
  })
})
