import { User } from '@/interfaces'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { injectable, inject } from 'tsyringe'
import { HttpStatusCodeEnum } from '../constants'

declare module 'fastify' {
  interface FastifyRequest {
    user?: User
    sessionId?: string
  }
}

@injectable()
export class AuthMiddleware {
  constructor(

  ) {

  }

  public async handle(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    try {
      await request.jwtVerify()
    } catch (error) {
      return reply
        .status(HttpStatusCodeEnum.UNAUTHORIZED)
        .send({ error: 'Usuário não autenticado.' })
    }
  }
}
