import { z } from 'zod'

export const AuthenticateBodySchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'A senha é obrigatória'),
})
export type AuthenticateBodyInput = z.infer<typeof AuthenticateBodySchema>