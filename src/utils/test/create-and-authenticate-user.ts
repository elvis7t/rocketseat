import { PrismaConfig } from '@/configs/prisma.config'
import { FastifyInstance } from 'fastify'
import request from 'supertest'
import { container } from 'tsyringe'
import { hash } from 'bcryptjs'

export async function createAndAuthenticateUser(
  app: FastifyInstance,
  isAdmin = false,
) {
  const prismaConfig = container.resolve(PrismaConfig)
  const prisma = prismaConfig.getClient()
  // Gera um e-mail único para evitar conflito de constraint nos testes
  const uniqueEmail = `user-${Date.now()}-${Math.random().toString(36).substring(2, 8)}@example.com`
  const createdUser = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: uniqueEmail,
      role: isAdmin ? 'ADMIN' : 'MEMBER',
      password_hash: await hash('123456', 6),
    },
  })

  const response = await request(app.server).post('/v1/session').send({
    email: uniqueEmail,
    password: '123456',
  })

  const { token } = response.body

  return { token, user: createdUser }
}
