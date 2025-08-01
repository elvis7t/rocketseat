import { injectable, inject } from 'tsyringe'
import { UserRepository } from '@/repository'
import { compare } from 'bcryptjs'
import { User } from '@/generated/prisma'
import { UserInvalidCredentialsError } from '@/errors/user.invalid-credentials-error'

interface AuthenticateUserServiceRequest {
  email: string
  password: string
}

interface AuthenticateServiceResponse {
  user: User
}

@injectable()
export class AuthenticateService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {
    this.userRepository = userRepository
  }

  async execute({
    email,
    password,
  }: AuthenticateUserServiceRequest): Promise<AuthenticateServiceResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new UserInvalidCredentialsError('User not found')
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      throw new UserInvalidCredentialsError('Invalid password')
    }

    return { user }
  }
}
