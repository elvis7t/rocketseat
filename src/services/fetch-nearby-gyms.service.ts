import { GymRepository } from '@/repository'
import { Gym } from '@/generated/prisma'
import { injectable, inject } from 'tsyringe'

interface FetchNearbyGymsRequest {
  latitude: number
  longitude: number
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
    latitude,
    longitude,
  }: FetchNearbyGymsRequest): Promise<FetchNearbyGymsResponse> {
    const gyms = await this.gymRepository.findManyNearby({
      latitude,
      longitude,
    })
    return { gyms }
  }
}
