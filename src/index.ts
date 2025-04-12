import { main } from '@/app'

const { app, env } = main()

app
  .listen({
    port: env.API_PORT,
    host: '0.0.0.0',
  })
  .then((address) => {
    console.info(`🎉 API is running on port: ${address}`)
  })
  .catch((error) => {
    console.error('❌ Error on starting application:', error)
    process.exit(1)
  })
