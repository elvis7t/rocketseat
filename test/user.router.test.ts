import { test, beforeAll, afterAll, describe, beforeEach } from 'vitest'
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
      .send({
        name: 'Elvis',
        email: 'elvis@gmail.com',
        password: '123123',
      })
      .expect(201)
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

  // test.skip('should register POST /users route', () => {
  //   userRouter.registerRoutes(mockApp)

  //   expect(mockApp.post).toHaveBeenCalledWith('/users', expect.any(Function))
  // })

  // test.skip('should register GET /users/profile route', () => {
  //   userRouter.registerRoutes(mockApp)

  //   expect(mockApp.get).toHaveBeenCalledWith(
  //     '/users/profile',
  //     expect.any(Function),
  //   )
  // })

  // test.skip('should call done callback if provided', () => {
  //   const done = vi.fn()
  //   userRouter.registerRoutes(mockApp, undefined, done)

  //   expect(done).toHaveBeenCalled()
  // })
})
