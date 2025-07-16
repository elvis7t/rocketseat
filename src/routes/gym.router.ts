import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router } from '@/interfaces'
import { AuthenticateController } from '@/controllers'
import { AuthMiddleware } from '@/middlewares'

@injectable()
export class GymRouter implements Router {
  constructor(
    @inject('AuthMiddleware')
    private readonly authMiddleware: AuthMiddleware,
  ) {}

  public registerRoutes(
    app: FastifyInstance,
    _options?: unknown,
    done?: (err?: Error) => void,
  ): FastifyInstance {
    app.addHook('onRequest', (request, reply) => {
      this.authMiddleware.handle(request, reply)
    })

    if (done) {
      done()
    }

    return app
  }
}
