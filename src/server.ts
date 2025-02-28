import fastify from 'fastify'
import knex from 'knex'
import config from '../db/database'

const app = fastify()
const database = knex(config)

app.get('/hello', async () => {
  const test = database('sqlite_schema').select('*')
  return test
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on http://localhost:3000')
})
