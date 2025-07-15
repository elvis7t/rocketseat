import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router as RouterInterface } from '@/interfaces'

@injectable()
export class Router implements RouterInterface {
  constructor(
    @inject('GymRouter')
    private GymRouter: RouterInterface,
    @inject('UserRouter')
    private userRouter: RouterInterface,
  ) {
    this.GymRouter = GymRouter
    this.userRouter = userRouter
  }

  public registerRoutes(
    app: FastifyInstance,
    _options?: unknown,
    done?: (err?: Error) => void,
  ) {
    app.register(this.GymRouter.registerRoutes.bind(this.GymRouter), {
      prefix: '/v1',
    })

    app.register(this.userRouter.registerRoutes.bind(this.userRouter), {
      prefix: '/v1',
    })

    if (done) {
      done()
    }

    return app
  }
}
