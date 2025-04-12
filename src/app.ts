import 'reflect-metadata'
import { container } from 'tsyringe'
import './container'
import { EnvConfig, FastifyConfig } from './configs'
import { Router } from './routes/router'

export const main = () => {
  const app = container.resolve(FastifyConfig).app()
  const env = container.resolve(EnvConfig)
  const router = container.resolve(Router)

  router.registerRoutes(app)
  return { app, env }
}
