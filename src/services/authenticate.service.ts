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
  // token: string;
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

// export class AuthenticateService implements AuthenticateUserService {
//     constructor(private userRepository: UserRepository) { }

//     async execute(email: string, password: string): Promise<AuthenticateServiceResponse> {
//         const user = await this.userRepository.findByEmail(email);

//         if (!user) {
//             throw new Error("User not found");
//         }

//         const isValidPassword = await compare(password, user.password);

//         if (!isValidPassword) {
//             throw new Error("Invalid password");
//         }

//         const token = sign({ id: user.id }, process.env.JWT_SECRET, {
//             expiresIn: "1d",
//         });

//         return { user, token };
//     }
// }
