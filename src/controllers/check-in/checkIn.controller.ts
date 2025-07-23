import { FastifyRequest, FastifyReply } from 'fastify'
import { injectable } from 'tsyringe'
import { ZodError, z } from 'zod'
import { HttpStatusCodeEnum } from '../../constants'
import {
  ValidateCheckInService,
  FetchUserCheckInsHistoryService,
  GetUserMetricsService,
  CheckInService,
} from '@/services'
import {
  makeFetchUserCheckInsHistoryServiceFactory,
  makeValidateCheckInServiceFactory,
  makeGetUserMetricsServiceFactory,
  makeCheckInServiceFactory,
} from '@/services/factories'
import { registerCheckInBodySchema } from '@/validators/register-check-in-body.schema'
@injectable()
export class CheckInController {
  private readonly fetchUserCheckInsHistoryService: FetchUserCheckInsHistoryService
  private readonly getUserMetricsService: GetUserMetricsService
  private readonly validateCheckInService: ValidateCheckInService
  private readonly checkInService: CheckInService

  constructor() {
    this.fetchUserCheckInsHistoryService =
      makeFetchUserCheckInsHistoryServiceFactory()
    this.checkInService = makeCheckInServiceFactory()
    this.getUserMetricsService = makeGetUserMetricsServiceFactory()
    this.validateCheckInService = makeValidateCheckInServiceFactory()
  }

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { gymId, latitude, longitude } = request.body as {
      gymId: string
      latitude: number
      longitude: number
    }

    const userId = request.user.sub
    const BodySchema = {
      userId,
      gymId,
      latitude,
      longitude,
    }
    const validatedInput = registerCheckInBodySchema.parse(BodySchema)
    try {
      await this.checkInService.execute({
        userId,
        gymId: validatedInput.gymId,
        userLatitude: validatedInput.latitude,
        userLongitude: validatedInput.longitude,
      })
      reply
        .code(HttpStatusCodeEnum.CREATED)
        .send({ message: 'Check-in created successfully' })
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

  async history(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const checkinHistoryQuerySchema = z.object({
      page: z.coerce.number().min(1).default(1),
    })

    const { page } = checkinHistoryQuerySchema.parse(request.query)
    const userId = request.user.sub
    const checkInHistory = await this.fetchUserCheckInsHistoryService.execute({
      userId,
      page,
    })

    return reply.code(HttpStatusCodeEnum.OK).send({ checkInHistory })
  }

  async metrics(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const userId = request.user.sub
    const { checkInsCount } = await this.getUserMetricsService.execute({
      userId,
    })

    return reply.code(HttpStatusCodeEnum.OK).send({ checkInsCount })
  }

  async validate(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const validateCheckInParamsSchema = z.object({
      checkInId: z.string().uuid(),
    })

    const { checkInId } = validateCheckInParamsSchema.parse(request.params)

    try {
      await this.validateCheckInService.execute({
        checkInId,
      })
      reply
        .code(HttpStatusCodeEnum.NO_CONTENT)
        .send({ message: 'Check-in validated successfully' })
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
}
