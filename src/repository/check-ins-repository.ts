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

  findById(id: string): Promise<CheckIn | null> {
    throw new Error('Method not implemented.')
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
