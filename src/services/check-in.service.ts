import { injectable, inject } from 'tsyringe'
import { CheckInsRepository, GymRepository } from '@/repository'
import { CheckIn } from '@/generated/prisma'
import { ResourceNotFoundError } from '@/errors/resource-not-found-error'
import { Decimal } from '@/generated/prisma/runtime/library'

interface CheckInServiceRequest {
  userId: string
  gymId: string
  userLatitude: number
  userLongitude: number
}

interface CheckInServiceResponse {
  checkIn: CheckIn
}

function getDistanceBetweenCoordinates(
  coord1: { latitude: Decimal; longitude: Decimal },
  coord2: { latitude: number; longitude: number },
): number {
  // Haversine formula
  const toRadians = (deg: number) => (deg * Math.PI) / 180

  const lat1 = Number(coord1.latitude)
  const lon1 = Number(coord1.longitude)
  const lat2 = coord2.latitude
  const lon2 = coord2.longitude

  const R = 6371e3 // Earth radius in meters
  const φ1 = toRadians(lat1)
  const φ2 = toRadians(lat2)
  const Δφ = toRadians(lat2 - lat1)
  const Δλ = toRadians(lon2 - lon1)

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c // distance in meters
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

    const maxDistanceInKilometers = 0.1 // kilometers

    if (distance > maxDistanceInKilometers) {
      throw new ResourceNotFoundError(
        'You are too far from the gym to check in.',
      )
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
