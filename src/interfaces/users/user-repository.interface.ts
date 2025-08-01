import { Prisma, User as PrismaUser } from '@/generated/prisma'
import { BaseRepositoryInterface } from '../base-repository.interface'

export interface UserRepositoryInterface extends BaseRepositoryInterface {
  findAll(): Promise<PrismaUser[]>
  create(data: Prisma.UserCreateInput): Promise<PrismaUser>
  findByEmail(email: string): Promise<PrismaUser | null>
  findById(id: string): Promise<PrismaUser | null>
}
