import { z } from 'zod'

export const mealSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'O itulo é obrigatório'),
  description: z.string().min(1, 'A descrição é obrigatória'),
  is_on_diet: z.boolean().default(false),
  user_id: z.string().uuid('O ID do usuário deve ser um UUID válido'),
})

export type MealInput = z.infer<typeof mealSchema>
