import { injectable, inject } from 'tsyringe'
import { UserRepository } from '@/repository/user.repository'
import { User } from '@/interfaces'
import { userSchema, UserInput } from '../validators'
import { ZodError } from 'zod'
@injectable()
export class UserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {
    this.userRepository = userRepository
  }

  public async findUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email)
    if (!user) {
      throw new Error(`User with email ${email} not found`)
    }
    return user
  }

  public async findAll(): Promise<User[]> {
    const users = await this.userRepository.findAll()
    if (!users) {
      throw new Error('No users found')
    }
    return users
  }

  public async create(input: UserInput): Promise<User> {
    try {
      const validatedInput = userSchema.parse(input)
      const existingUser = await this.userRepository.findByEmail(
        validatedInput.email,
      )
      if (existingUser) {
        throw new Error(
          `User with email ${validatedInput.email} already exists`,
        )
      }

      const user = await this.userRepository.create(
        validatedInput.name,
        validatedInput.email,
        validatedInput.password_hash,
      )

      return user
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(
          `Validation failed: ${error.errors.map((e) => e.message).join(', ')}`,
        )
      }
      throw error
    }
  }
}
