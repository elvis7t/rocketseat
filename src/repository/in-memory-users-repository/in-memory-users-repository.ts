import { injectable } from 'tsyringe'
import { UserRepositoryInterface } from '@/interfaces'
import { Prisma, User as PrismaUser } from '@/generated/prisma'

@injectable()
export class InMemoryUsersRepository implements UserRepositoryInterface {
  private users: PrismaUser[] = []

  async findAll(): Promise<PrismaUser[]> {
    return this.users
  }

  async create(data: Prisma.UserCreateInput): Promise<PrismaUser> {
    const newUser: PrismaUser = {
      id: this.generateId(),
      ...data,
    } as PrismaUser
    this.users.push(newUser)
    return newUser
  }

  async findByEmail(email: string): Promise<PrismaUser | null> {
    return this.users.find((user) => user.email === email) || null
  }

  async findById(id: string): Promise<PrismaUser | null> {
    return this.users.find((user) => user.id === id) || null
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15)
  }
}
