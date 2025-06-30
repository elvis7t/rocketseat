import { GymRepository } from '@/repository'
import { Gym } from '@/generated/prisma'
import { injectable, inject } from 'tsyringe'

interface FetchNearbyGymsRequest {
  userLatitude: number
  userLongitude: number
}

interface FetchNearbyGymsResponse {
  gyms: Gym[]
}

@injectable()
export class FetchNearbyGymsService {
  constructor(
    @inject('GymRepository')
    private gymRepository: GymRepository,
  ) {
    this.gymRepository = gymRepository
  }

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearbyGymsRequest): Promise<FetchNearbyGymsResponse> {
    const gyms = await this.gymRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })
    return { gyms }
  }
}
