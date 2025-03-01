import fastify from 'fastify'
import knex from 'knex'
import crypto from 'crypto'
import config from '../db/database'
import { env } from '../src/env'

const app = fastify()
const database = knex(config)

app.get('/hello', async () => {
  const transactions = await database('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de test',
      amount: 1000,
    })
    .returning('*')
  return transactions
})

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server is running on http://localhost:${env.PORT}`)
})
