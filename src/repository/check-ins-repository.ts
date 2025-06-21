import { inject, injectable } from 'tsyringe'
import { PrismaConfig } from '@/configs'
import { CheckInsRepositoryInterface } from '@/interfaces'
import { Prisma, CheckIn } from '@/generated/prisma' // ajuste o caminho se necessário

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

  private get prisma() {
    return this.prismaConfig.getClient()
  }
}
