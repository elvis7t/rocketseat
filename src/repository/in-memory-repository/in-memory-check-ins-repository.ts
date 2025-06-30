import { injectable } from 'tsyringe'
import { CheckInsRepositoryInterface } from '@/interfaces'
import { Prisma, CheckIn, PrismaClient } from '@/generated/prisma'
import { randomUUID } from 'node:crypto'
import dayjs from 'dayjs'
import { DefaultArgs } from '@/generated/prisma/runtime/library'

@injectable()
export class InMemoryCheckInsRepository implements CheckInsRepositoryInterface {
  public checkIns: CheckIn[] = []

  async findAll(): Promise<CheckIn[]> {
    return this.checkIns
  }

  async findByUserIdOnDate(
    userId: string,
    date: Date,
  ): Promise<CheckIn | null> {
    const startOfDay = dayjs(date).startOf('date').toDate()
    const endOfDay = dayjs(date).endOf('date').toDate()

    return (
      this.checkIns.find(
        (checkIn) =>
          checkIn.user_id === userId &&
          checkIn.checked_at >= startOfDay &&
          checkIn.checked_at <= endOfDay,
      ) || null
    )
  }

  async create(data: Prisma.CheckInCreateInput): Promise<CheckIn> {
    const checkIn: CheckIn = {
      id: randomUUID(),
      user_id: (data as any).user_id,
      gym_id: (data as any).gym_id ?? null,
      checked_at: new Date(),
      validated_at: (data as any).validated_at
        ? typeof (data as any).validated_at === 'string'
          ? new Date((data as any).validated_at)
          : (data as any).validated_at
        : null,
    }
    this.checkIns.push(checkIn)
    return checkIn
  }

  async findById(id: string): Promise<CheckIn | null> {
    return this.checkIns.find((checkIn) => checkIn.id === id) || null
  }

  async findManyByUserId(userId: string, page: number): Promise<CheckIn[]> {
    return this.checkIns
      .filter((checkIn) => checkIn.user_id === userId)
      .slice((page - 1) * 20, page * 20)
  }

  async countByUserId(userId: string): Promise<number> {
    return this.checkIns.filter((checkIn) => checkIn.user_id === userId).length
  }

  async save(data: CheckIn): Promise<CheckIn> {
    const index = this.checkIns.findIndex((checkIn) => checkIn.id === data.id)
    if (index > 0) {
      this.checkIns[index] = data
    }
    this.checkIns.push(data)
    return data
  }

  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
}
