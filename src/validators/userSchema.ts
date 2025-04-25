import { z } from 'zod'

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'O itulo é obrigatório'),
  email: z.string().min(1, 'O itulo é obrigatório'),
  password: z.string().min(1, 'A descrição é obrigatória'),
})

export type UserInput = z.infer<typeof userSchema>
