import { injectable, inject } from 'tsyringe'
import { CheckInsRepository } from '@/repository'
import { CheckIn } from '@/generated/prisma'
import { ResourceNotFoundError } from '@/errors/resource-not-found-error'

interface CheckInServiceRequest {
  userId: string
  gymId: string
}

interface CheckInServiceResponse {
  checkIn: CheckIn
}

@injectable()
export class CheckInService {
  constructor(
    @inject('CheckInsRepository')
    private readonly checkInsRepository: CheckInsRepository,
  ) {
    this.checkInsRepository = checkInsRepository
  }

  async execute({
    userId,
    gymId,
  }: CheckInServiceRequest): Promise<CheckInServiceResponse> {
    const checkInOnSameDay = await this.checkInsRepository.findByUserIdOnDate(
      userId,
      new Date(),
    )
    if (checkInOnSameDay) {
      throw new ResourceNotFoundError('You can only check in once per day.')
    }
    const checkIn = await this.checkInsRepository.create({
      user_id: userId,
      gym_id: gymId,
    })

    return {
      checkIn,
    }
  }
}
