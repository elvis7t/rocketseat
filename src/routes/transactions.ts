import { FastifyInstance } from 'fastify'
import { knex } from '../../db/database'
import { z } from 'zod'
import crypto from 'node:crypto'
import { checkSessionIdExists } from '../middleware/check-session-id-exists'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', { preHandler: [checkSessionIdExists] }, async (request) => {
    const { sessionId } = request.cookies

    const transactions = await knex('transactions')
      .where({ session_id: sessionId })
      .select('*')

    return {
      transactions,
    }
  })

  app.get('/:id', { preHandler: [checkSessionIdExists] }, async (request) => {
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
  })

  app.get(
    '/summary',
    { preHandler: [checkSessionIdExists] },
    async (request) => {
      const { sessionId } = request.cookies
      const summary = await knex('transactions')
        .where({ session_id: sessionId })
        .sum('amount', { as: 'amount' })
        .first()
      return { summary }
    },
  )

  app.post('/', async (request, replay) => {
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
    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'debit' ? amount : amount * 1,
      session_id: sessionId,
    })

    return replay.status(201).send()
  })
}
