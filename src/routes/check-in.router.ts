import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router } from '@/interfaces'
import { CheckInController } from '@/controllers'
import { AuthMiddleware } from '@/middlewares'

@injectable()
export class CheckInRouter implements Router {
  constructor(
    @inject('CheckInController')
    private readonly checkInController: CheckInController,
    @inject('AuthMiddleware')
    private readonly authMiddleware: AuthMiddleware,
  ) {
    this.authMiddleware = authMiddleware
    this.checkInController = checkInController
  }

  public registerRoutes(
    app: FastifyInstance,
    _options?: unknown,
    done?: (err?: Error) => void,
  ): FastifyInstance {
    app.addHook('onRequest', async (request, reply) => {
      await this.authMiddleware.handle(request, reply)
    })

    app.post('/check-in', async (request, reply) => {
      return this.checkInController.create(request, reply)
    })

    app.get('/check-in/history', async (request, reply) => {
      return this.checkInController.history(request, reply)
    })

    app.get('/check-in/metrics', async (request, reply) => {
      return this.checkInController.metrics(request, reply)
    })

    app.patch('/check-in/:checkInId/validate', async (request, reply) => {
      return this.checkInController.validate(request, reply)
    })

    if (done) {
      done()
    }

    return app
  }
}
