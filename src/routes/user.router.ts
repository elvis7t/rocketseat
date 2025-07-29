import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router } from '@/interfaces'
import {
  ProfileController,
  AuthenticateController,
  UserController,
  RefreshController,
} from '@/controllers'
import { AuthMiddleware, AccessMiddleware } from '@/middlewares'

@injectable()
export class UserRouter implements Router {
  constructor(
    @inject('AuthenticateController')
    private readonly authenticateController: AuthenticateController,
    @inject('ProfileController')
    private readonly profileController: ProfileController,
    @inject('UserController')
    private readonly userController: UserController,
    @inject('AuthMiddleware')
    private readonly authMiddleware: AuthMiddleware,
    @inject('AccessMiddleware')
    private readonly AccessMiddleware: AccessMiddleware,
    @inject('RefreshController')
    private readonly refreshController: RefreshController,
  ) {
    this.userController = userController
    this.profileController = profileController
    this.authMiddleware = authMiddleware
    this.AccessMiddleware = AccessMiddleware
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

    app.post('/session', async (request, reply) => {
      return this.authenticateController.authenticate(request, reply)
    })

    app.patch('/token/refresh', async (request, reply) => {
      return this.refreshController.refresh(request, reply)
    })

    if (done) {
      done()
    }

    return app
  }
}
