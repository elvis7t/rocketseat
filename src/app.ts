import 'reflect-metadata'
import { container } from 'tsyringe'
import './container'
import { EnvConfig, FastifyConfig } from './configs'
import { Router } from './routes/router'
import fastifyJwt from '@fastify/jwt'

export const main = () => {
  const app = container.resolve(FastifyConfig).app()
  const env = container.resolve(EnvConfig)
  const router = container.resolve(Router)
  app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
  })
  router.registerRoutes(app)
  return { app, env }
}
