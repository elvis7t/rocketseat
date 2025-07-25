import { test, beforeAll, afterAll, describe, expect } from 'vitest'
import request from 'supertest'
import { main } from '../../app'
import { createAndAuthenticateUser } from '@/utils'

const { app } = main()
describe('GymController (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const response = await request(app.server)
      .post('/v1/gym')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Gym 13',
        description: 'Description for Gym 1',
        phone: '11999999999',
        latitude: -27.2092052,
        longitude: -49.6401091,
      })

    expect(response.statusCode).toEqual(200)
  })

  test('should be able to search a gym', async () => {
    const { token } = await createAndAuthenticateUser(app)

    await request(app.server)
      .post('/v1/gym')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'TS Gym',
        description: 'Description for TS Gym',
        phone: '11999999999',
        latitude: -27.2092052,
        longitude: -49.6401091,
      })

    await request(app.server)
      .post('/v1/gym')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JS Gym',
        description: 'Description for JS Gym',
        phone: '11999999999',
        latitude: -27.2092052,
        longitude: -49.6401091,
      })

    const response = await request(app.server)
      .get('/v1/gym/search')
      .query({
        query: 'JS Gym',
        page: 1,
      })
      .set('Authorization', `Bearer ${token}`)
      .send()
    // expect(response.body.gyms) should point to the array inside the response
    const gyms = response.body.gyms?.gyms ?? response.body.gyms

    expect(response.statusCode).toEqual(200)
    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'JS Gym',
        }),
      ]),
    )
  })
  test('should be able to list nearby gyms', async () => {
    const { token } = await createAndAuthenticateUser(app)

    await request(app.server)
      .post('/v1/gym')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'TS Gym',
        description: 'Description for TS Gym',
        phone: '11999999999',
        latitude: -27.2092052,
        longitude: -49.6401091,
      })

    await request(app.server)
      .post('/v1/gym')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JS Gym',
        description: 'Description for JS Gym',
        phone: '11999999999',
        latitude: -27.0610928,
        longitude: -49.5229501,
      })

    const response = await request(app.server)
      .get('/v1/gym/nearby')
      .query({
        latitude: -27.0610928,
        longitude: -49.5229501,
      })
      .set('Authorization', `Bearer ${token}`)
      .send()
    // expect(response.body.gyms) should point to the array inside the response
    const gyms = response.body.gyms?.gyms ?? response.body.gyms

    expect(response.statusCode).toEqual(200)
    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'JS Gym',
        }),
      ]),
    )
  })
})
