import { injectable, inject } from 'tsyringe'
import { FastifyReply, FastifyRequest } from 'fastify'
import { SqliteConfig } from '@/configs'
import { MealService } from '@/services'

@injectable()
export class MainController {
  constructor(
    @inject('SqliteConfig') private readonly sqliteConfig: SqliteConfig,
    @inject('MealService') private readonly mealService: MealService,
  ) {}

  public async getAll(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      // const mealService = container.resolve(MealService)
      const meals = await this.mealService.findAll()
      return reply.send({ meals })
    } catch (error: any) {
      return reply.status(500).send({ error: error.message })
    }
  }

  public async createMeal(request: FastifyRequest, replay: FastifyReply) {
    const { name, description, is_on_diet } = request.body
    const user = request.user
    const mealTransaction = {
      name,
      description,
      is_on_diet,
      user_id: user.id,
    }

    if (!name || !description) {
      return replay
        .status(400)
        .send({ error: 'Name and description are required' })
    }
    const meal = this.mealService.create(mealTransaction)

    return replay.status(201).send({ meal })
  }

  // public async getIndex2(request: FastifyRequest, reply: FastifyReply) {
  //   return ':)'
  // }

  // public async createTransaction(
  //   request: FastifyRequest,
  //   replay: FastifyReply,
  // ) {
  //   const creatTransactionBodySchema = z.object({
  //     title: z.string(),
  //     amount: z.number(),
  //     type: z.enum(['credit', 'debit']),
  //   })

  //   const { title, amount, type } = creatTransactionBodySchema.parse(
  //     request.body,
  //   )

  //   let sessionId = request.cookies.sessionId
  //   if (!sessionId) {
  //     sessionId = crypto.randomUUID()
  //     replay.setCookie('sessionId', sessionId, {
  //       path: '/',
  //       maxAge: 60 * 60 * 24 * 7, // 1 week
  //     })
  //   }
  //   const knex = this.sqliteConfig.getConnection()
  //   await knex('transactions').insert({
  //     id: crypto.randomUUID(),
  //     title,
  //     amount: type === 'credit' ? amount : amount * -1,
  //     session_id: sessionId,
  //   })

  //   return replay.status(201).send()
  // }

  // public async getransactionById(request: FastifyRequest, reply: FastifyReply) {
  //   const knex = this.sqliteConfig.getConnection()
  //   const getTransactionsParamsSchema = z.object({
  //     id: z.string().uuid(),
  //   })

  //   const { id } = getTransactionsParamsSchema.parse(request.params)

  //   const { sessionId } = request.cookies

  //   const transaction = await knex('transactions')
  //     .where({
  //       id,
  //       session_id: sessionId,
  //     })
  //     .first()

  //   return { transaction }
  // }

  // public async getSummary(request: FastifyRequest, reply: FastifyReply) {
  //   const { sessionId } = request.cookies
  //   const knex = this.sqliteConfig.getConnection()
  //   const summary = await knex('transactions')
  //     .where({ session_id: sessionId })
  //     .sum('amount', { as: 'amount' })
  //     .first()
  //   return { summary }
  // }

  // public async getTest(request: FastifyRequest, reply: FastifyReply) {
  //   return 'Hello World'
  // }
}
