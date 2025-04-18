import { test, beforeAll, afterAll, describe, expect, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { main } from '../src/app'

const { app } = main()
describe('UserRouter', () => {
  beforeAll(async () => {
    await app.ready()
    execSync('npm run knex migrate:latest')
  })

  afterAll(async () => {
    execSync('npm run knex migrate:rollback --all')
    await app.close()
  })

  beforeEach(async () => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
    await new Promise((resolve) => setTimeout(resolve, 100))
  })

  test('user can create a new User', async () => {
    await request(app.server)
      .post('/v1/user')
      .set('Authorization', 'admin@email.com')
      .set('Cookie', 'sessionId=123')
      .send({
        name: 'Elvis',
        email: 'elvis@gmail.com',
        password: '123123',
      })
      .expect(201)
  })

  test('user the Unauthorized user', async () => {
    await request(app.server)
      .post('/v1/user')
      .set('Cookie', 'sessionId=123')
      .send({
        name: 'Admin',
        email: 'admin@email.com',
        password: '123123',
      })
      .expect(401)
  })

  test('user the unauthenticated user', async () => {
    await request(app.server)
      .post('/v1/user')
      .send({
        name: 'Admin',
        email: 'admin@email.com',
        password: '123123',
      })
      .expect(401)
  })

  test('should be able to list all users', async () => {
    const createUsersResponse = await request(app.server)
      .post('/v1/user')
      .set('Authorization', 'admin@email.com')
      .set('Cookie', 'sessionId=123')
      .send({
        name: 'Elvis',
        email: 'elvis7@gmail.com',
        password: '123123',
      })

    const cookies = createUsersResponse.get('Set-Cookie')
    const listTransactionsResponse = await request(app.server)
      .get('/v1/users')
      .set('Cookie', cookies || [])
      .expect(200)
    const users = listTransactionsResponse.body.users
    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'elvis7@gmail.com',
          name: 'Elvis',
        }),
      ]),
    )
  })
})
