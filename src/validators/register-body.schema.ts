import { z } from 'zod'

export const registerBodySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'O name é obrigatório'),
  email: z.string().email(),
  password: z.string().min(1, 'A senha é obrigatória'),
})

export type UserInput = z.infer<typeof registerBodySchema>
