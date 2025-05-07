import { z } from 'zod'

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'O name é obrigatório'),
  email: z.string().min(1, 'O email é obrigatório'),
  password_hash: z.string().min(1, 'A senha é obrigatória'),
})

export type UserInput = z.infer<typeof userSchema>
