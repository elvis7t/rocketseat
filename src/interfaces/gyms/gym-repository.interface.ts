import { Prisma, Gym } from '@/generated/prisma'
import { BaseRepositoryInterface } from '../base-repository.interface'

export interface FindManyNearbyParams {
  latitude: number
  longitude: number
}

export interface GymsRepositoryInterface extends BaseRepositoryInterface {
  findAll(): Promise<Gym[]>
  findById(id: string): Promise<Gym | null>
  findByTitle(title: string): Promise<Gym | null>
  searchMany(query: string, page: number): Promise<Gym[]>
  create(data: Prisma.GymCreateInput): Promise<Gym>
  findManyNearby(params: FindManyNearbyParams): Promise<Gym[]>
}
