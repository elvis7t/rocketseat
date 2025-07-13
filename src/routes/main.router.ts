import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router } from '@/interfaces'
import { MainController, AuthenticateController } from '@/controllers'
import { CheckSessionMiddleware, AuthMiddleware } from '@/middlewares'

@injectable()
export class MainRouter implements Router {
  constructor(
    @inject('MainController')
    private readonly mainController: MainController,
    @inject('AuthenticateController')
    private readonly authenticateController: AuthenticateController,
    @inject('CheckSessionMiddleware')
    private readonly checkSessionMiddleware: CheckSessionMiddleware,
    @inject('AuthMiddleware')
    private readonly authMiddleware: AuthMiddleware,
  ) {
    this.mainController = mainController
    this.checkSessionMiddleware = checkSessionMiddleware
    this.authMiddleware = authMiddleware
  }

  public registerRoutes(
    app: FastifyInstance,
    _options?: unknown,
    done?: (err?: Error) => void,
  ): FastifyInstance {
    app.post(
      '/session',

      async (request, reply) => {
        return this.authenticateController.authenticate(request, reply)
      },
    )

    if (done) {
      done()
    }

    return app
  }
}
