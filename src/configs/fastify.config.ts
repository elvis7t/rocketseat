import cors from '@fastify/cors'
import Fastify from 'fastify'
import { inject, injectable } from 'tsyringe'
import { ZodSchema } from 'zod'
import { EnvConfig } from '@/configs/env.config'
import cookie from '@fastify/cookie'

@injectable()
export class FastifyConfig {
  constructor(@inject('EnvConfig') private readonly env: EnvConfig) {}

  public app() {
    const app = Fastify()

    app.register(cors, {
      origin: this.env.CORS_ORIGIN,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })

    app.setSerializerCompiler<ZodSchema>((response) => {
      return (data) => {
        const { error } = response.schema.safeParse(data)

        if (error) {
          console.log('Response validation error', {
            response,
            error,
            data,
          })
        }

        return JSON.stringify(data)
      }
    })

    app.register(cookie)
    return app
  }
}
