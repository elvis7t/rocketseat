import { inject, injectable } from 'tsyringe'
import { PrismaConfig } from '@/configs'
import { Prisma, Gym } from '@/generated/prisma'
import { GymsRepositoryInterface, FindManyNearbyParams } from '@/interfaces'

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

  public async findAll(): Promise<Gym[]> {
    return await this.prisma.gym.findMany()
  }

  public async findById(id: string): Promise<Gym | null> {
    return await this.prisma.gym.findUnique({
      where: { id },
    })
  }

  public async findByTitle(title: string): Promise<Gym | null> {
    return await this.prisma.gym.findUnique({
      where: { title },
    })
  }

  public async create(data: Prisma.GymCreateInput): Promise<Gym> {
    return await this.prisma.gym.create({
      data,
    })
  }

  public async searchMany(query: string, page: number): Promise<Gym[]> {
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

  public async findManyNear(params: FindManyNearbyParams): Promise<Gym[]> {
    const { latitude, longitude } = params
    return await this.prisma.gym.findMany({
      where: {
        latitude: {
          gte: latitude - 0.1,
          lte: latitude + 0.1,
        },
        longitude: {
          gte: longitude - 0.1,
          lte: longitude + 0.1,
        },
      },
    })
  }

  public async findManyNearby({
    latitude,
    longitude,
  }: FindManyNearbyParams): Promise<Gym[]> {
    const gyms = await this.prisma.$queryRaw<Gym[]>`
      SELECT * FROM gyms where ( 6371 * acos( cos( radians(${latitude}))* cos( radians(latitude))* cos( radians(longitude) - radians(${longitude}))+ sin( radians(${latitude})) * sin( radians(latitude)))) < 10
    `
    return gyms
  }
}
