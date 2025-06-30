import { injectable, inject } from 'tsyringe'
import { CheckInsRepository } from '@/repository'
import { CheckIn } from '@/generated/prisma'
import { ResourceNotFoundError } from '@/errors'

interface ValidateCheckInServiceRequest {
  checkInId: string
}

interface ValidateCheckInServiceResponse {
  checkIn: CheckIn
}

@injectable()
export class ValidateCheckInService {
  constructor(
    @inject('CheckInsRepository')
    private readonly checkInsRepository: CheckInsRepository,
  ) {
    this.checkInsRepository = checkInsRepository
  }

  async execute({
    checkInId,
  }: ValidateCheckInServiceRequest): Promise<ValidateCheckInServiceResponse> {
    const checkIn = await this.checkInsRepository.findById(checkInId)

    if (!checkIn) {
      throw new ResourceNotFoundError('Check-in not found.')
    }

    checkIn.validated_at = new Date()

    await this.checkInsRepository.save(checkIn)

    return {
      checkIn,
    }
  }
}
