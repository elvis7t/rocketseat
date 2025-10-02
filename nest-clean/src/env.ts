import z from 'zod'

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().optional().default(3333),
  DATABASE_URL: z.string().min(1),
  JWT_PRIVATE_KEY: z.string().min(1),
  JWT_PUBLIC_KEY: z.string().min(1),
  // JWT_EXPIRATION_TIME: z.string().min(1).default("1h"),
  // SALT_ROUNDS: z.coerce.number().default(10),
})

export type Env = z.infer<typeof envSchema>
