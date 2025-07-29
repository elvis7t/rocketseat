import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router } from '@/interfaces'
import { GymController } from '@/controllers'
import { AuthMiddleware, AccessMiddleware } from '@/middlewares'

@injectable()
export class GymRouter implements Router {
  constructor(
    @inject('GymController')
    private readonly gymController: GymController,
    @inject('AuthMiddleware')
    private readonly authMiddleware: AuthMiddleware,
    @inject('AccessMiddleware')
    private readonly accessMiddleware: AccessMiddleware,
  ) {
    this.authMiddleware = authMiddleware
    this.gymController = gymController
    this.accessMiddleware = accessMiddleware
  }

  public registerRoutes(
    app: FastifyInstance,
    _options?: unknown,
    done?: (err?: Error) => void,
  ): FastifyInstance {
    app.addHook('onRequest', async (request, reply) => {
      await this.authMiddleware.handle(request, reply)
    })

    app.post(
      '/gym',
      {
        preHandler: this.accessMiddleware.verifyUserRole('ADMIN'),
      },
      async (request, reply) => {
        return this.gymController.create(request, reply)
      },
    )

    app.get('/gym/search', async (request, reply) => {
      return this.gymController.search(request, reply)
    })

    app.get('/gym/nearby', async (request, reply) => {
      return this.gymController.nearby(request, reply)
    })

    if (done) {
      done()
    }

    return app
  }
}
