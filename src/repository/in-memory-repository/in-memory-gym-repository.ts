import { injectable } from 'tsyringe'
import { GymsRepositoryInterface, FindManyNearbyParams } from '@/interfaces'
import { Prisma, PrismaClient, Gym } from '@/generated/prisma'
import { randomUUID } from 'node:crypto'
import { DefaultArgs } from '@/generated/prisma/runtime/library'
import { getDistanceBetweenCoordinates } from '@/utils'

@injectable()
export class InMemoryGymRepository implements GymsRepositoryInterface {
  private gyms: Gym[] = []

  async findManyNearby(params: FindManyNearbyParams): Promise<Gym[]> {
    return this.gyms.filter((gym) => {
      const distance = getDistanceBetweenCoordinates(
        { latitude: params.latitude, longitude: params.longitude },
        {
          latitude: gym.latitude.toNumber(),
          longitude: gym.longitude.toNumber(),
        },
      )
      return distance <= 10 // Example radius of 10 units
    })
  }

  async findAll(): Promise<Gym[]> {
    return this.gyms
  }

  async findById(id: string): Promise<Gym | null> {
    return this.gyms.find((gym) => gym.id === id) || null
  }

  async findByTitle(title: string): Promise<Gym | null> {
    return this.gyms.find((gym) => gym.title === title) || null
  }

  async create(data: Prisma.GymCreateInput): Promise<Gym> {
    const gym: Gym = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description ?? null,
      phone: data.phone ?? null,
      latitude: new Prisma.Decimal(data.latitude.toString()),
      longitude: new Prisma.Decimal(data.longitude.toString()),
    }
    this.gyms.push(gym)
    return gym
  }

  async searchMany(query: string, page: number): Promise<Gym[]> {
    const gyms = this.gyms.filter((gym) =>
      gym.title.toLowerCase().includes(query.toLowerCase()),
    )
    const start = (page - 1) * 20
    return gyms.slice(start, start + 20)
  }

  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
}
