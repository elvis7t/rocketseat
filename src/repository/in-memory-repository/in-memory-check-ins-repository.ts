import { injectable } from 'tsyringe'
import { CheckInsRepositoryInterface } from '@/interfaces'
import { Prisma, CheckIn } from '@/generated/prisma'
import { randomUUID } from 'node:crypto'

@injectable()
export class InMemoryCheckInsRepository implements CheckInsRepositoryInterface {
  async findByUserIdOnDate(
    userId: string,
    date: Date,
  ): Promise<CheckIn | null> {
    const startOfDay = new Date(date)
    startOfDay.setHours(0, 0, 0, 0)
    const endOfDay = new Date(date)
    endOfDay.setHours(23, 59, 59, 999)

    return (
      this.checkIns.find(
        (checkIn) =>
          checkIn.user_id === userId &&
          checkIn.checked_at >= startOfDay &&
          checkIn.checked_at <= endOfDay,
      ) || null
    )
  }

  private checkIns: CheckIn[] = []

  async findAll(): Promise<CheckIn[]> {
    return this.checkIns
  }

  async create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn> {
    const checkIn: CheckIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id ?? null,
      checked_at: new Date(),
      validated_at: data.validated_at
        ? typeof data.validated_at === 'string'
          ? new Date(data.validated_at)
          : data.validated_at
        : null,
    }
    this.checkIns.push(checkIn)
    return checkIn
  }

  async findById(id: string): Promise<CheckIn | null> {
    return this.checkIns.find((checkIn) => checkIn.id === id) || null
  }
}
