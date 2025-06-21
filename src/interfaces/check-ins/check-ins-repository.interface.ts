import { CheckIn } from '@/generated/prisma'
import { Prisma } from '@prisma/client'

export interface CheckInsRepositoryInterface {
  findAll(): Promise<CheckIn[]>
  create(data: Prisma.CheckInCreateInput): Promise<CheckIn>
  findById(id: string): Promise<CheckIn | null>
}
