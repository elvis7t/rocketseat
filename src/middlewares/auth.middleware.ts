import { FastifyRequest, FastifyReply } from 'fastify'
import { injectable, inject } from 'tsyringe'
import { UserRepository } from '@/repository/user.repository'

@injectable()
export class AuthMiddleware {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const sessionId =
      request.cookies?.sessionId || request.headers.authorization

    if (!sessionId || typeof sessionId !== 'string') {
      return reply.status(401).send({ error: 'Não autenticado.' })
    }

    const user = await this.userRepository.findById(sessionId)

    if (!user) {
      return reply.status(401).send({ error: 'Sessão inválida.' })
    }

    // Anexa o usuário na request para uso posterior
    request.user = user
  }
}
