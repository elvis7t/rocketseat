import { PrismaClient } from '@/generated/prisma'

export interface BaseRepositoryInterface {
  readonly prisma: PrismaClient
}
