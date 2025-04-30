import { FastifyReply, FastifyRequest } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { EnvConfig } from '@/configs'
import { HttpStatusCodeEnum } from '../constants'
import { HttpError } from '../errors'

@injectable()
export class CheckSessionMiddleware {
  constructor(
    @inject('EnvConfig')
    private readonly env: EnvConfig,
  ) {
    this.env = env
  }

  public async checkSessionIdExists(
    request: FastifyRequest,
    replay: FastifyReply,
  ): Promise<void> {
    const { sessionId } = request.cookies

    if (!sessionId) {
      throw new HttpError({
        statusCode: HttpStatusCodeEnum.UNAUTHORIZED,
        message: 'Unauthorized',
      })
    }
    request.sessionId = sessionId
  }
}
