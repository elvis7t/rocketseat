import { Prisma, Gym } from '@/generated/prisma'
import { BaseRepositoryInterface } from '../base-repository.interface'

export interface GymsRepositoryInterface extends BaseRepositoryInterface {
  findAll(): Promise<Gym[]>
  findById(id: string): Promise<Gym | null>
  findByTitle(title: string): Promise<Gym | null>
  searchMany(query: string, page: number): Promise<Gym[]>
  create(data: Prisma.GymCreateInput): Promise<Gym>
}
