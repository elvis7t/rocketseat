import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router } from '@/interfaces'
import { MainController } from '@/controllers/main.controller'
import { CheckSessionMiddleware } from '@/middlewares/checksession.middleware'

@injectable()
export class MainRouter implements Router {
  constructor(
    @inject('MainController')
    private readonly mainController: MainController,
    @inject('CheckSessionMiddleware')
    private readonly checkSessionMiddleware: CheckSessionMiddleware,
  ) {}

  public registerRoutes(
    app: FastifyInstance,
    _options?: unknown,
    done?: (err?: Error) => void,
  ): FastifyInstance {
    app.get(
      '/',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getIndex(request, reply)
      },
    )

    app.get(
      '/:id',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getransactionById(request, reply)
      },
    )

    app.get(
      '/summary',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getSummary(request, reply)
      },
    )

    app.post('/', async (request, reply) => {
      return this.mainController.createTransaction(request, reply)
    })

    if (done) {
      done()
    }

    return app
  }
}
