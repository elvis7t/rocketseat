import { FastifyInstance } from 'fastify'
import { inject, injectable } from 'tsyringe'
import { Router } from '@/interfaces'
import { MainController } from '@/controllers/main.controller'
import { CheckSessionMiddleware, AuthMiddleware } from '@/middlewares'

@injectable()
export class MainRouter implements Router {
  constructor(
    @inject('MainController')
    private readonly mainController: MainController,
    @inject('CheckSessionMiddleware')
    private readonly checkSessionMiddleware: CheckSessionMiddleware,
    @inject('AuthMiddleware')
    private readonly authMiddleware: AuthMiddleware,
  ) {}

  public registerRoutes(
    app: FastifyInstance,
    _options?: unknown,
    done?: (err?: Error) => void,
  ): FastifyInstance {
    app.get(
      '/meals',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getAll(request, reply)
      },
    )

    app.post(
      '/meal',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.createMeal(request, reply)
      },
    )

    app.put(
      '/meal/:id',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.updateMeal(request, reply)
      },
    )

    app.delete(
      '/meal/:id',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.deleteMeal(request, reply)
      },
    )

    app.get(
      '/meals/user',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getMealSumaryByUser(request, reply)
      },
    )

    app.get(
      '/meal/:id',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getMealById(request, reply)
      },
    )

    app.get(
      '/meal/sumary',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getMealSumaryByUser(request, reply)
      },
    )

    app.get(
      '/meal/ondiet',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getMealOnDietByUser(request, reply)
      },
    )

    app.get(
      '/meal/offdiet',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getMealOffDietByUser(request, reply)
      },
    )
    app.get(
      '/meals/longest-diet-sequence',
      {
        preHandler: [
          (request, reply) =>
            this.checkSessionMiddleware.checkSessionIdExists(request, reply),
          (request, reply) => this.authMiddleware.handle(request, reply),
        ],
      },
      async (request, reply) => {
        return this.mainController.getLongestDietSequence(request, reply)
      },
    )

    if (done) {
      done()
    }

    return app
  }
}
