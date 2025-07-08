import { test, beforeAll, afterAll, describe, expect, beforeEach } from 'vitest'
import request from 'supertest'
import { main } from '../app'

const { app } = main()
describe('Authenticate (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('should be able to authenticate', async () => {
    await request(app.server).post('/v1/user').send({
      name: 'John Doe',
      email: 'john.does@example.com',
      password: '123456',
    })

    const response = await request(app.server).post('/v1/session').send({
      email: 'john.does@example.com',
      password: '123456',
    })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
  })
})
