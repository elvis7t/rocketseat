import { FastifyInstance } from 'fastify'
import { database } from '../../db/database'
import { z } from 'zod'
import crypto from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const transactions = await database('transactions').select('*')

    return {
      transactions,
    }
  })

  app.get('/:id', async (request) => {
    const getTransactionsParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionsParamsSchema.parse(request.params)

    const transaction = await database('transactions').select('*').where({ id })
    return { transaction }
  })

  app.get('/summary', async () => {
    const summary = await database('transactions')
      .sum('amount', { as: 'amount' })
      .first()
    return { summary }
  })

  app.post('/', async (request, replay) => {
    const creatTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = creatTransactionBodySchema.parse(
      request.body,
    )

    await database('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'debit' ? amount : amount * -1,
    })

    return replay.status(201).send()
  })
}
