import { test, beforeAll, afterAll, describe, expect } from 'vitest'
import request from 'supertest'
import { main } from '../../app'
import { createAndAuthenticateUser } from '@/utils'

const { app } = main()
describe('Profile (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('should be able to get user profile', async () => {
    const { token, user } = await createAndAuthenticateUser(app)

    const tokenString = typeof token === 'string' ? token : token

    const profileResponse = await request(app.server)
      .get('/v1/user/profile')
      .set('Authorization', `Bearer ${tokenString}`)
      .send()

    expect(profileResponse.statusCode).toEqual(200)
    expect(profileResponse.body.user).toEqual(
      expect.objectContaining({
        email: user.email,
      }),
    )
  })
})
