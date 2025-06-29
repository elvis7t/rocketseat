import { inject, injectable } from 'tsyringe'
import { CheckInsRepository } from '@/repository'
import { ResourceNotFoundError } from '@/errors'
import { CheckIn } from '@/generated/prisma'

interface FetchUserCheckInsHistoryServiceRequest {
  userId: string
  page: number
}

interface FetchUserCheckInsHistoryServiceResponse {
  checkIns: CheckIn[]
}

@injectable()
export class FetchUserCheckInsHistoryService {
  constructor(
    @inject('CheckInsRepository')
    private readonly CheckInsRepository: CheckInsRepository,
  ) {
    this.CheckInsRepository = CheckInsRepository
  }

  async execute({
    userId,
    page,
  }: FetchUserCheckInsHistoryServiceRequest): Promise<FetchUserCheckInsHistoryServiceResponse> {
    const checkIns = await this.CheckInsRepository.findManyByUserId(
      userId,
      page,
    )

    // if (!checkIns) {
    //   throw new ResourceNotFoundError('Check-ins not found.')
    // }

    return {
      checkIns,
    }
  }
}
