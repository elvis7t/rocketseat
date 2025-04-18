import { injectable, inject } from 'tsyringe'
import { UserRepository } from '@/repository/user.repository'
import { User } from '@/interfaces'

@injectable()
export class UserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

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

  public async create(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(email)
    if (existingUser) {
      throw new Error(`User with email ${email} already exists`)
    }

    const user = await this.userRepository.create(name, email, password)
    return user
  }
}
