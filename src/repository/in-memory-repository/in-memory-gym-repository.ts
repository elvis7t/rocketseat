import { injectable } from 'tsyringe'
import { GymsRepositoryInterface } from '@/interfaces'
import { Prisma, PrismaClient, Gym } from '@/generated/prisma'
import { randomUUID } from 'node:crypto'
import { DefaultArgs } from '@/generated/prisma/runtime/library'

@injectable()
export class InMemoryGymRepository implements GymsRepositoryInterface {
  private gyms: Gym[] = []

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
      latitude: new Prisma.Decimal(data.latitude as any),
      longitude: new Prisma.Decimal(data.longitude as any),
    }
    this.gyms.push(gym)
    return gym
  }

  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
}
