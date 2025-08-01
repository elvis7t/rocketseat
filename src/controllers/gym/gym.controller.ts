import { FastifyRequest, FastifyReply } from 'fastify'
import { injectable } from 'tsyringe'
import { registerGymBodySchema, GymInput } from '@/validators'
import { z, ZodError } from 'zod'
import {
  GymService,
  SearchGymsService,
  FetchNearbyGymsService,
} from '@/services'
import {
  makeGymServiceFactory,
  makeSearchGymsServiceFactory,
  makeFetchNearbyGymsServiceFactory,
} from '@/services/factories'
import { HttpStatusCodeEnum } from '@/constants'

@injectable()
export class GymController {
  private readonly gymService: GymService
  private readonly searchGymsService: SearchGymsService
  private readonly fetchNearbyGymsService: FetchNearbyGymsService
  constructor() {
    this.gymService = makeGymServiceFactory()
    this.searchGymsService = makeSearchGymsServiceFactory()
    this.fetchNearbyGymsService = makeFetchNearbyGymsServiceFactory()
  }

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { title, description, phone, latitude, longitude } =
      registerGymBodySchema.parse(request.body)
    try {
      await this.gymService.execute({
        title,
        description,
        phone,
        latitude,
        longitude,
      })
    } catch (error) {
      if (error instanceof Error && error.message.includes('already exists')) {
        reply.code(HttpStatusCodeEnum.CONFLICT).send({ error: error.message })
        return
      }
      if (error instanceof ZodError) {
        throw new Error(
          `Validation failed: ${error.errors.map((e) => e.message).join(', ')}`,
        )
      }
      throw error
    }
  }

  async search(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const searchGymsQueryParams = z.object({
      query: z.string(),
      page: z.coerce.number().min(1).default(1),
    })
    const { query, page } = searchGymsQueryParams.parse(request.query)
    const gyms = await this.searchGymsService.execute({ query, page })
    reply.code(HttpStatusCodeEnum.OK).send({ gyms })
  }

  async nearby(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const nearbyGymsQueryParams = z.object({
      latitude: z.coerce.number().refine((value) => Math.abs(value) < 90),
      longitude: z.coerce.number().refine((value) => Math.abs(value) < 180),
    })
    const { latitude, longitude } = nearbyGymsQueryParams.parse(request.query)
    const gyms = await this.fetchNearbyGymsService.execute({
      latitude,
      longitude,
    })
    reply.code(HttpStatusCodeEnum.OK).send({ gyms })
  }
}
