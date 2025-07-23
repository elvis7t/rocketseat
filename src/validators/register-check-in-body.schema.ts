import { z } from 'zod'

export const registerCheckInBodySchema = z.object({
  userId: z.string(),
  gymId: z.string().uuid(),
  latitude: z.number().refine((value) => {
    return Math.abs(value) < 90
  }),
  longitude: z.number().refine((value) => {
    return Math.abs(value) < 180
  }),
})

export type CheckInInput = z.infer<typeof registerCheckInBodySchema>
