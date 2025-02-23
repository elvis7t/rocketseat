import fastify from 'fastify'
import { database } from '../db/database'

const app = fastify()

app.get('/hello', async () => {
  const test = database('sqlite_schema').select('*')
  return test
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on http://localhost:3000')
})
