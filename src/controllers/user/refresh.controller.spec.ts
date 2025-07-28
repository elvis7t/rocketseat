import { test, beforeAll, afterAll, describe, expect } from 'vitest'
import request from 'supertest'
import { main } from '../../app'

const { app } = main()
describe('Refresh (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('should be able to refresh token', async () => {
    await request(app.server).post('/v1/user').send({
      name: 'John Doe',
      email: 'john.does@example.com',
      password: '123456',
    })

    const authResponse = await request(app.server).post('/v1/session').send({
      email: 'john.does@example.com',
      password: '123456',
    })

    const cookies = authResponse.get('Set-Cookie')

    const response = await request(app.server)
      .patch('/v1/token/refresh')
      .set('Cookie', cookies)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
    expect(response.get('Set-Cookie')).toEqual([
      expect.stringContaining('refreshToken='),
    ])
  })
})
