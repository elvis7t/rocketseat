import { injectable } from 'tsyringe'
import { UserRepositoryInterface } from '@/interfaces'
import { Prisma, User as PrismaUser, PrismaClient } from '@/generated/prisma'
import { randomUUID } from 'node:crypto'
import { DefaultArgs } from '@/generated/prisma/runtime/library'
@injectable()
export class InMemoryUsersRepository implements UserRepositoryInterface {
  private users: PrismaUser[] = []
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  async findAll(): Promise<PrismaUser[]> {
    return this.users
  }

  async create(data: Prisma.UserCreateInput): Promise<PrismaUser> {
    const newUser: PrismaUser = {
      id: randomUUID(),
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
}
