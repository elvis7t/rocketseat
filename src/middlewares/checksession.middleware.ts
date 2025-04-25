import { FastifyReply, FastifyRequest } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { EnvConfig } from '@/configs'

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
      return replay.status(401).send({
        message: 'Unauthorized',
      })
    }
    request.sessionId = sessionId
  }
}
