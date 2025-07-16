import { injectable, inject } from 'tsyringe'
import { UserRepository } from '@/repository'
import { User } from '@/generated/prisma'
import { UserAlreadyExistsError } from '@/errors/user.already-exists-error'

interface GetUserProfileServiceRequest {
  userId: string
}

interface GetUserProfileServiceResponse {
  user: User
}

@injectable()
export class UserProfileService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {
    this.userRepository = userRepository
  }

  async execute({
    userId,
  }: GetUserProfileServiceRequest): Promise<GetUserProfileServiceResponse> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new UserAlreadyExistsError('User not found')
    }

    return { user }
  }
}
