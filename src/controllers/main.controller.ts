import { injectable, inject } from 'tsyringe'
import { FastifyReply, FastifyRequest } from 'fastify'
import { SqliteConfig } from '@/configs'
import { z } from 'zod'

@injectable()
export class MainController {
  constructor(
    @inject('SqliteConfig') private readonly sqliteConfig: SqliteConfig,
  ) {}

  public async getIndex(request: FastifyRequest, reply: FastifyReply) {
    try {
      const knex = this.sqliteConfig.getConnection()

      const { sessionId } = request.cookies

      const transactions = await knex('transactions')
        .where({ session_id: sessionId })
        .select('*')

      return reply.send({ total: 200, transactions })
    } catch (error) {
      console.error('Erro na consulta:', error)
      return reply.status(500).send({ error: 'Internal Server Error' })
    }
  }

  public async getIndex2(request: FastifyRequest, reply: FastifyReply) {
    return ':)'
  }

  public async createTransaction(
    request: FastifyRequest,
    replay: FastifyReply,
  ) {
    const creatTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = creatTransactionBodySchema.parse(
      request.body,
    )

    let sessionId = request.cookies.sessionId
    if (!sessionId) {
      sessionId = crypto.randomUUID()
      replay.setCookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      })
    }
    const knex = this.sqliteConfig.getConnection()
    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
    })

    return replay.status(201).send()
  }

  public async getransactionById(request: FastifyRequest, reply: FastifyReply) {
    const knex = this.sqliteConfig.getConnection()
    const getTransactionsParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionsParamsSchema.parse(request.params)

    const { sessionId } = request.cookies

    const transaction = await knex('transactions')
      .where({
        id,
        session_id: sessionId,
      })
      .first()

    return { transaction }
  }

  public async getSummary(request: FastifyRequest, reply: FastifyReply) {
    const { sessionId } = request.cookies
    const knex = this.sqliteConfig.getConnection()
    const summary = await knex('transactions')
      .where({ session_id: sessionId })
      .sum('amount', { as: 'amount' })
      .first()
    return { summary }
  }

  public async getTest(request: FastifyRequest, reply: FastifyReply) {
    return 'Hello World'
  }
}
