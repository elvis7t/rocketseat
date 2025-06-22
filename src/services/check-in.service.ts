import { injectable, inject } from 'tsyringe'
import { CheckInsRepository, GymRepository } from '@/repository'
import { CheckIn } from '@/generated/prisma'
import { ResourceNotFoundError } from '@/errors/resource-not-found-error'

interface CheckInServiceRequest {
  userId: string
  gymId: string
  userLatitude: number
  userLongitude: number
}

interface CheckInServiceResponse {
  checkIn: CheckIn
}

@injectable()
export class CheckInService {
  constructor(
    @inject('CheckInsRepository')
    private readonly checkInsRepository: CheckInsRepository,
    @inject('GymsRepository')
    private readonly gymRepository: GymRepository,
  ) {
    this.checkInsRepository = checkInsRepository
    this.gymRepository = gymRepository
  }

  async execute({
    userId,
    gymId,
  }: CheckInServiceRequest): Promise<CheckInServiceResponse> {
    const gym = await this.gymRepository.findById(gymId)

    if (!gym) {
      throw new ResourceNotFoundError('Gym not found.')
    }

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
