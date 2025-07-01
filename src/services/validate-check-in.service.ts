import { injectable, inject } from 'tsyringe'
import { CheckInsRepository } from '@/repository'
import { CheckIn } from '@/generated/prisma'
import { ResourceNotFoundError } from '@/errors'
import dayjs from 'dayjs'

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

    const distanceInMinutesFromCheckInCreation = dayjs(new Date()).diff(
      checkIn.checked_at,
      'minutes',
    )

    if (distanceInMinutesFromCheckInCreation > 20) {
      throw new Error('Check-in expired.')
    }

    checkIn.validated_at = new Date()

    await this.checkInsRepository.save(checkIn)

    return {
      checkIn,
    }
  }
}
