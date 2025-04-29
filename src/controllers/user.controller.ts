import { FastifyRequest, FastifyReply } from 'fastify'
import { injectable, inject } from 'tsyringe'
import { UserRepository } from '@/repository/user.repository'
import { randomUUID } from 'crypto'
import { CreateUserBody } from '@/interfaces/users/user.interface'
import { UserService } from '@/services'
import { HttpStatusCodeEnum } from '../constants';

@injectable()
export class UserController {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepository,
    @inject('UserService')
    private readonly userService: UserService,
  ) {
    this.userRepository = userRepository
    this.userService = userService
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
      reply.status(400).send({ error: 'Nome e e-mail são obrigatórios.' })
      return
    }

    const User = {
      name,
      email,
      password,
    }

    await this.userService.create(User)

    const sessionId = randomUUID()
    // Armazenar sessionId no cookie
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

  async profile(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const sessionId = request.cookies?.sessionId
    if (!sessionId) {
      reply.status(401).send({ error: 'Não autenticado.' })
      return
    }

    const user = await this.userRepository.findById(sessionId)
    if (!user) {
      reply.status(401).send({ error: 'Usuário não encontrado.' })
      return
    }

    reply.send({ user })
  }
}
