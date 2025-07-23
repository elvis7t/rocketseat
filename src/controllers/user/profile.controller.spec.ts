import { test, beforeAll, afterAll, describe, expect } from 'vitest'
import request from 'supertest'
import { main } from '../../app'

const { app } = main()
describe('Profile (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('should be able to user profile', async () => {
    await request(app.server).post('/v1/user').send({
      name: 'John Doe',
      email: 'john.does@example.com',
      password: '123456',
    })

    const response = await request(app.server).post('/v1/session').send({
      email: 'john.does@example.com',
      password: '123456',
    })

    const { token } = response.body

    const profileResponse = await request(app.server)
      .get('/v1/user/profile')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(profileResponse.statusCode).toEqual(200)
    expect(profileResponse.body.user).toEqual(
      expect.objectContaining({
        email: 'john.does@example.com',
      }),
    )
  })
})
