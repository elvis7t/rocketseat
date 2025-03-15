import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { env } from '../src/env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: '/transactions',
})

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server is running on http://localhost:${env.PORT}`)
})
