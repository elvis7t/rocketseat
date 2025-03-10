import { FastifyInstance } from 'fastify'
import { database } from '../../db/database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await database('transactions')
      .where('amount', 1000)
      .select('*')
    return transactions
  })
}
