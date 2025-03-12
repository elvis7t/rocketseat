import { FastifyInstance } from 'fastify'
import { database } from '../../db/database'
import { z } from 'zod'
import crypto from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
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
