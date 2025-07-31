import { GymRepository } from '@/repository'
import { Gym } from '@/generated/prisma'
import { injectable, inject } from 'tsyringe'

interface SearchGymsRequest {
  query: string
  page: number
}

interface SearchGymsResponse {
  gyms: Gym[]
}

@injectable()
export class SearchGymsService {
  constructor(
    @inject('GymRepository')
    private readonly gymRepository: GymRepository,
  ) {
    this.gymRepository = gymRepository
  }

  async execute({
    query,
    page,
  }: SearchGymsRequest): Promise<SearchGymsResponse> {
    const gyms = await this.gymRepository.searchMany(query, page)

    return { gyms }
  }
}
