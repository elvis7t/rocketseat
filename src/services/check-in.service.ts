import { injectable, inject } from 'tsyringe'
import { CheckInsRepository, GymRepository } from '@/repository'
import { CheckIn } from '@/generated/prisma'
import { MaxDistanceError, ResourceNotFoundError } from '@/errors'
import { Decimal } from '@/generated/prisma/runtime/library'
import { getDistanceBetweenCoordinates } from '@/utils'

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
    @inject('GymRepository')
    private readonly gymRepository: GymRepository,
  ) {
    this.checkInsRepository = checkInsRepository
    this.gymRepository = gymRepository
  }

  async execute({
    userId,
    gymId,
    userLatitude,
    userLongitude,
  }: CheckInServiceRequest): Promise<CheckInServiceResponse> {
    const gym = await this.gymRepository.findById(gymId)

    if (!gym) {
      throw new ResourceNotFoundError('Gym not found.')
    }

    const distance = getDistanceBetweenCoordinates(
      {
        latitude: new Decimal(userLatitude),
        longitude: new Decimal(userLongitude),
      },
      {
        latitude: gym.latitude.toNumber(),
        longitude: gym.longitude.toNumber(),
      },
    )
    console.log('🚀 ~ CheckInService ~ execute ~ distance:', distance)

    const maxDistanceInKilometers = 0.1 // kilometers

    if (distance > maxDistanceInKilometers) {
      throw new MaxDistanceError()
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
