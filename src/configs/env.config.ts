import { config } from 'dotenv'
import { resolve } from 'path'
import { z } from 'zod'
import { injectable } from 'tsyringe'

if (process.env.NODE_ENV === 'test') {
  config({ path: resolve(process.cwd(), '.env.test') })
} else {
  config({ path: resolve(process.cwd(), '.env') })
}

@injectable()
export class EnvConfig {
  public readonly NODE_ENV: string
  public readonly API_PORT: number
  public readonly CORS_ORIGIN: string
  public readonly DATABASE_CLIENT: string
  public readonly DATABASE_URL: string
  public readonly DATABASE_PORT: number
  public readonly DATABASE_USERNAME: string
  public readonly DATABASE_PASSWORD: string
  public readonly DATABASE_NAME: string

  constructor() {
    const configSchema = z.object({
      NODE_ENV: z
        .enum(['development', 'test', 'production'])
        .default('development'),
      API_PORT: z.coerce.number().default(3333),
      CORS_ORIGIN: z.string().default('*'),
      DATABASE_CLIENT: z.string().default(''),
      DATABASE_URL: z
        .string()
        .default('postgres://user:password@db:5432/apisolid'),
      DATABASE_PORT: z.coerce.number().default(5432),
      DATABASE_USERNAME: z.string().default('root'),
      DATABASE_PASSWORD: z.string().min(1, 'DATABASE_PASSWORD é obrigatório'),
      DATABASE_NAME: z.string().default('apisolid'),
    })

    const envVars = configSchema.safeParse(process.env)

    if (!envVars.success) {
      console.error(
        'Erro ao validar variáveis de ambiente:',
        envVars.error.format(),
      )
      throw new Error('Falha ao carregar as variáveis de ambiente.')
    }

    this.NODE_ENV = envVars.data.NODE_ENV
    this.API_PORT = envVars.data.API_PORT
    this.CORS_ORIGIN = envVars.data.CORS_ORIGIN
    this.DATABASE_CLIENT = envVars.data.DATABASE_CLIENT
    this.DATABASE_URL = envVars.data.DATABASE_URL
    this.DATABASE_PORT = envVars.data.DATABASE_PORT
    this.DATABASE_USERNAME = envVars.data.DATABASE_USERNAME
    this.DATABASE_PASSWORD = envVars.data.DATABASE_PASSWORD
    this.DATABASE_NAME = envVars.data.DATABASE_NAME
  }
}
