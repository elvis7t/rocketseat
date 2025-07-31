import { GymRepository } from '@/repository'
import { Gym } from '@/generated/prisma'
import { ResourceNotFoundError } from '@/errors/resource-not-found-error'
import { injectable, inject } from 'tsyringe'
import { randomUUID } from 'node:crypto'

interface GymServiceRequest {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface GymServiceResponse {
  gym: Gym
}

@injectable()
export class GymService {
  constructor(
    @inject('GymRepository')
    private readonly gymRepository: GymRepository,
  ) {
    this.gymRepository = gymRepository
  }

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: GymServiceRequest): Promise<GymServiceResponse> {
    const gym = await this.gymRepository.create({
      id: randomUUID(),
      title,
      description,
      phone,
      latitude,
      longitude,
    })

    if (!gym) {
      throw new ResourceNotFoundError(
        'No gyms found with the specified criteria.',
      )
    }

    return { gym }
  }
}
