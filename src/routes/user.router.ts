import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router } from '@/interfaces'
import { ProfileController, UserController } from '@/controllers'
import { AuthMiddleware, CheckSessionMiddleware } from '@/middlewares'

@injectable()
export class UserRouter implements Router {
  constructor(
    @inject('UserController')
    private readonly userController: UserController,
    @inject('ProfileController')
    private readonly profileController: ProfileController,
    @inject('AuthMiddleware')
    private readonly authMiddleware: AuthMiddleware,
    @inject('CheckSessionMiddleware')
    private readonly checkSessionMiddleware: CheckSessionMiddleware,
  ) {
    this.userController = userController
    this.profileController = profileController
    this.authMiddleware = authMiddleware
    this.checkSessionMiddleware = checkSessionMiddleware
  }

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
        //   (request, reply) =>
        //     this.checkSessionMiddleware.checkSessionIdExists(request, reply),
        //   (request, reply) => this.authMiddleware.handle(request, reply),
        // ],
      },
      async (request, reply) => {
        return this.userController.create(request, reply)
      },
    )

    app.get(
      '/user/profile',
      {
        preHandler: [
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.profileController.profile(request, reply)
      },
    )

    if (done) {
      done()
    }

    return app
  }
}
