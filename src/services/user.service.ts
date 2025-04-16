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

  // Outros métodos relacionados a lógica de usuário podem vir aqui
  // como createUser, updateUser, deleteUser, etc.
}
