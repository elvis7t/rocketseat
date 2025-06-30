import { inject, injectable } from 'tsyringe'
import { PrismaConfig } from '@/configs'
import { CheckInsRepositoryInterface } from '@/interfaces'
import { Prisma, CheckIn } from '@/generated/prisma'

@injectable()
export class CheckInsRepository implements CheckInsRepositoryInterface {
  constructor(
    @inject(PrismaConfig)
    private readonly prismaConfig: PrismaConfig,
  ) {
    this.prismaConfig = prismaConfig
  }

  async findAll(): Promise<CheckIn[]> {
    return this.prisma.checkIn.findMany()
  }

  async create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn> {
    return this.prisma.checkIn.create({ data })
  }

  async findById(id: string): Promise<CheckIn | null> {
    return this.prisma.checkIn.findUnique({
      where: { id },
    })
  }

  public get prisma() {
    return this.prismaConfig.getClient()
  }

  async findByUserIdOnDate(
    userId: string,
    date: Date,
  ): Promise<CheckIn | null> {
    return this.prisma.checkIn.findFirst({
      where: {
        user_id: userId,
        checked_at: {
          gte: startOfDay(date),
          lt: endOfDay(date),
        },
      },
    })
  }

  async findManyByUserId(userId: string, page: number): Promise<CheckIn[]> {
    return this.prisma.checkIn.findMany({
      where: { user_id: userId },
      skip: (page - 1) * 10,
      take: 10,
    })
  }

  async countByUserId(userId: string): Promise<number> {
    return this.prisma.checkIn.count({
      where: { user_id: userId },
    })
  }

  async save(data: CheckIn): Promise<CheckIn> {
    return this.prisma.checkIn.update({
      where: { id: data.id },
      data,
    })
  }
}

function endOfDay(date: Date): Date {
  const end = new Date(date)
  end.setHours(23, 59, 59, 999)
  return end
}

function startOfDay(date: Date): Date {
  const start = new Date(date)
  start.setHours(0, 0, 0, 0)
  return start
}
