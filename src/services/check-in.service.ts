import { injectable, inject } from 'tsyringe'
import { CheckInsRepository } from '@/repository'
import { CheckIn } from '@/generated/prisma'

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
    const checkIn = await this.checkInsRepository.create({
      user_id: userId,
      gym_id: gymId,
    })

    return {
      checkIn,
    }
  }
}
