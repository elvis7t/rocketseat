import { FastifyRequest, FastifyReply } from 'fastify'
import { injectable } from 'tsyringe'
import { randomUUID } from 'crypto'
import { CreateUserBody } from '@/interfaces/users/user.interface'
import { UserService } from '@/services'
import { makeUserServiceFactory } from '@/services/factories'
import { HttpStatusCodeEnum } from '../../constants'

@injectable()
export class UserController {
  private readonly userService: UserService
  constructor() {
    this.userService = makeUserServiceFactory()
  }

  async getAllUsers(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const users = await this.userService.findAll()
    reply.code(HttpStatusCodeEnum.OK).send({ users })
  }

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { name, email, password } = request.body as CreateUserBody

    if (!name || !email || !password) {
      reply
        .code(HttpStatusCodeEnum.BAD_REQUEST)
        .send({ error: 'Nome e e-mail são obrigatórios.' })
      return
    }

    const User = {
      name,
      email,
      password_hash: password,
    }

    try {
      await this.userService.create(User)
    } catch (error) {
      if (error instanceof Error && error.message.includes('already exists')) {
        reply.code(HttpStatusCodeEnum.CONFLICT).send({ error: error.message })
        return
      }
      reply
    }
    const sessionId = randomUUID()

    reply
      .setCookie('sessionId', sessionId, {
        path: '/',
        httpOnly: true,
        sameSite: true,
        maxAge: 60 * 60 * 24 * 7, // 7 dias
      })
      .code(HttpStatusCodeEnum.CREATED)
      .send({ message: 'Usuário criado com sucesso.' })
  }
}
