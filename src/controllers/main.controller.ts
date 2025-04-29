import { injectable, inject } from 'tsyringe'
import { FastifyReply, FastifyRequest } from 'fastify'
import { SqliteConfig } from '@/configs'

@injectable()
export class MainController {
  constructor(
    @inject('SqliteConfig') private readonly sqliteConfig: SqliteConfig,
  ) {
    this.sqliteConfig = sqliteConfig
  }

  public async getAll(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async createMeal(request: FastifyRequest, replay: FastifyReply) {
    try {
      return replay.status(201).send({})
    } catch (error: any) {
      return replay.status(500).send({ error: error.message })
    }
  }

  public async updateMeal(request: FastifyRequest, replay: FastifyReply) {
    try {
      return replay.status(201).send({})
    } catch (error: any) {
      return replay.status(500).send({ error: error.message })
    }
  }

  public async deleteMeal(request: FastifyRequest, replay: FastifyReply) {
    try {
      return replay.status(204).send()
    } catch (error: any) {
      return replay.status(500).send({ error: error.message })
    }
  }

  public async getAllMealByUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      return reply.send({})
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async getMealById(request: FastifyRequest, reply: FastifyReply) {
    try {
      return reply.send({})
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async getMealSumaryByUser(
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    try {
      return reply.send({})
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }
}
