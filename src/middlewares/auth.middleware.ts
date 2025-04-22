import { FastifyRequest, FastifyReply } from 'fastify'
import { injectable, inject } from 'tsyringe'
import { UserService } from '@/services'

@injectable()
export class AuthMiddleware {
  constructor(
    @inject('UserService')
    private readonly userService: UserService,
  ) {}

  public async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { sessionId } = request
    console.log('sessionId', sessionId)

    const email = request.headers.authorization

    if (!sessionId || typeof sessionId !== 'string') {
      return reply.status(401).send({ error: 'Não autorizado.' })
    }

    if (!email || typeof email !== 'string') {
      return reply.status(401).send({ error: 'Não autenticado.' })
    }

    const user = await this.userService.findUserByEmail(email)

    if (!user) {
      return reply.status(401).send({ error: 'Sessão inválida.' })
    }

    request.user = user
  }
}
