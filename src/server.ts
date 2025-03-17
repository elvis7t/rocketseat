import { app } from '../src/app'
import { env } from '../src/env'

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server is running on http://localhost:${env.PORT}`)
})
