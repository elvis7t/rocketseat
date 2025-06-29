import { inject, injectable } from 'tsyringe'
import { PrismaConfig } from '@/configs'
import { Prisma, Gym } from '@/generated/prisma'
import { GymsRepositoryInterface } from '@/interfaces'

@injectable()
export class GymRepository implements GymsRepositoryInterface {
  constructor(
    @inject(PrismaConfig)
    private readonly prismaConfig: PrismaConfig,
  ) {
    this.prismaConfig = prismaConfig
  }

  public get prisma() {
    return this.prismaConfig.getClient()
  }

  async findAll(): Promise<Gym[]> {
    return this.prisma.gym.findMany()
  }

  async findById(id: string): Promise<Gym | null> {
    return this.prisma.gym.findUnique({
      where: { id },
    })
  }

  async findByTitle(title: string): Promise<Gym | null> {
    return this.prisma.gym.findUnique({
      where: { title },
    })
  }

  async create(data: Prisma.GymCreateInput): Promise<Gym> {
    return this.prisma.gym.create({
      data,
    })
  }

  async searchMany(query: string, page: number): Promise<Gym[]> {
    const gyms = await this.prisma.gym.findMany({
      where: {
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })
    if (!gyms || gyms.length === 0) {
      return []
    }
    return gyms
  }
}
