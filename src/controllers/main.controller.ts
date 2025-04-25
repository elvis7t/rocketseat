import { injectable, inject } from 'tsyringe'
import { FastifyReply, FastifyRequest } from 'fastify'
import { SqliteConfig } from '@/configs'
import { MealService } from '@/services'

@injectable()
export class MainController {
  constructor(
    @inject('SqliteConfig') private readonly sqliteConfig: SqliteConfig,
    @inject('MealService') private readonly mealService: MealService,
  ) {
    this.sqliteConfig = sqliteConfig
    this.mealService = mealService
  }

  public async getAll(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const meals = await this.mealService.findAll()
      return reply.send({ meals })
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async createMeal(request: FastifyRequest, replay: FastifyReply) {
    const { title, description, is_on_diet } = request.body
    const userId = request.user.id

    const mealTransaction = {
      title,
      description,
      is_on_diet,
      user_id: userId,
    }

    try {
      const meal = await this.mealService.create(mealTransaction)
      return replay.status(201).send({ meal })
    } catch (error: any) {
      return replay.status(500).send({ error: error.message })
    }
  }

  public async updateMeal(request: FastifyRequest, replay: FastifyReply) {
    const { id } = request.params
    const { title, description, is_on_diet } = request.body
    const userId = request.user.id

    const mealTransaction = {
      id,
      title,
      description,
      is_on_diet,
      user_id: userId,
    }
    try {
      const meal = this.mealService.update(mealTransaction)
      return replay.status(201).send({ meal })
    } catch (error: any) {
      return replay.status(500).send({ error: error.message })
    }
  }

  public async deleteMeal(request: FastifyRequest, replay: FastifyReply) {
    const { id } = request.params

    if (!id) {
      return replay.status(400).send({ error: 'Id is required' })
    }
    try {
      const meal = await this.mealService.findById(id)
      if (!meal) {
        return replay.status(404).send({ error: 'Meal not found' })
      }
      await this.mealService.delete(id)

      return replay.status(204).send()
    } catch (error: any) {
      return replay.status(500).send({ error: error.message })
    }
  }

  public async getAllMealByUser(request: FastifyRequest, reply: FastifyReply) {
    const userId = request.user.id
    try {
      const meals = await this.mealService.findByUserId(userId)
      return reply.send({ meals })
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async getMealById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params
    const userId = request.user.id

    try {
      const meal = await this.mealService.findById(id)
      if (!meal) {
        return reply.status(404).send({ error: 'Meal not found' })
      }
      return reply.send({ meal })
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async getMealSumaryByUser(
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    const userId = request.user.id

    try {
      const meals = await this.mealService.findByUserId(userId)

      return reply.send({ total: meals.length })
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async getMealOnDietByUser(
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    const userId = request.user.id

    try {
      const meals = await this.mealService.findMealOnDietbyUser(userId, true)
      return reply.send({ totals: meals.length })
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async getMealOffDietByUser(
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    const userId = request.user.id

    try {
      const meals = await this.mealService.findMealOnDietbyUser(userId, false)
      return reply.send({ totals: meals.length })
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async getLongestDietSequence(
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    const userId = request.user.id

    try {
      const longestSequence =
        await this.mealService.getLongestDietSequence(userId)
      return reply.send({ longestSequence })
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }
}
