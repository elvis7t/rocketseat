import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router } from '@/interfaces'
import { UserController } from '@/controllers/user.controller'
import { AuthMiddleware } from '@/middlewares'

@injectable()
export class UserRouter implements Router {
  constructor(
    @inject('UserController')
    private readonly userController: UserController,
    @inject('CheckSessionMiddleware')
    private readonly AuthMiddleware: AuthMiddleware,
  ) {}

  public registerRoutes(
    app: FastifyInstance,
    _options?: unknown,
    done?: (err?: Error) => void,
  ): FastifyInstance {
    app.get('/users', async (request, reply) => {
      return this.userController.getAllUsers(request, reply)
    })

    app.post(
      '/user',
      {
        // preHandler: [
        //   (request, reply) => this.AuthMiddleware.handle(request, reply),
        // ],
      },
      async (request, reply) => {
        return this.userController.create(request, reply)
      },
    )

    app.get('/users/profile', async (request, reply) => {
      return this.userController.profile(request, reply)
    })

    if (done) {
      done()
    }

    return app
  }
}
