import { test, beforeAll, afterAll, describe, expect, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { main } from '../app'

const { app } = main()
describe('Register (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(async () => {
    // execSync('npm run knex migrate:rollback --all')
    // execSync('npm run knex migrate:latest')
    // await new Promise((resolve) => setTimeout(resolve, 100))
  })

  test('should be able to register', async () => {
    const response = await request(app.server).post('/v1/user').send({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(201)
  })
})
