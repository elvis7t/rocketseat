import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticateUser(app: FastifyInstance) {
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

  return { token }
}
