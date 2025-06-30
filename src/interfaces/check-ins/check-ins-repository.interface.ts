import { CheckIn, Prisma } from '@/generated/prisma'
import { BaseRepositoryInterface } from '../base-repository.interface'

export interface CheckInsRepositoryInterface extends BaseRepositoryInterface {
  findAll(): Promise<CheckIn[]>
  create(data: Prisma.CheckInCreateInput): Promise<CheckIn>
  findById(id: string): Promise<CheckIn | null>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  countByUserId(userId: string): Promise<number>
  save(data: CheckIn): Promise<CheckIn>
}
