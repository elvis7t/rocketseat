import { z } from 'zod'

export const registerGymBodySchema = z.object({
  title: z.string(),
  description: z.string().nullable(),
  phone: z.string().nullable(),
  latitude: z.number().refine((value) => {
    return Math.abs(value) < 90
  }),
  longitude: z.number().refine((value) => {
    return Math.abs(value) < 180
  }),
})

export type GymInput = z.infer<typeof registerGymBodySchema>
