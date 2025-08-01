import { User } from '@/interfaces'
import type { FastifyRequest, FastifyReply, RouteGenericInterface, RawServerDefault, preHandlerHookHandler } from 'fastify'
import { injectable, inject } from 'tsyringe'
import { HttpStatusCodeEnum } from '../constants'

declare module 'fastify' {
  interface FastifyRequest {
    user?: User
    sessionId?: string
  }
}

@injectable()
export class AccessMiddleware {
  constructor() {}

  public verifyUserRole(roleToVerify: 'ADMIN' | 'USER'): preHandlerHookHandler {
    return async (
      request: FastifyRequest,
      reply: FastifyReply,
    ): Promise<void> => {
      const { user } = request

      if (!user || user.role !== roleToVerify) {
        return reply.status(HttpStatusCodeEnum.UNAUTHORIZED).send({
          message: `You do not have permission to access this resource as a ${roleToVerify}.`,
        })
      }
    }
  }
}
