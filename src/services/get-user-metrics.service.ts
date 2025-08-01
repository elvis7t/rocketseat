import { inject, injectable } from 'tsyringe'
import { CheckInsRepository } from '@/repository'

interface GetUserMetricsServiceRequest {
  userId: string
}

interface GetUserMetricsServiceResponse {
  checkInsCount: number
}

@injectable()
export class GetUserMetricsService {
  constructor(
    @inject('CheckInsRepository')
    private readonly CheckInsRepository: CheckInsRepository,
  ) {
    this.CheckInsRepository = CheckInsRepository
  }

  async execute({
    userId,
  }: GetUserMetricsServiceRequest): Promise<GetUserMetricsServiceResponse> {
    const checkInsCount = await this.CheckInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
