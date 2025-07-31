import 'reflect-metadata'
import { InMemoryGymRepository } from '@/repository'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { GymService } from './gym.service'

vi.mock('bcryptjs', () => ({
  hash: vi.fn(async (pw: string) => `hashed-${pw}`),
  compare: vi.fn(async (pw: string, hash: string) => hash === `hashed-${pw}`),
}))

let gymRepository: InMemoryGymRepository
let sut: GymService

describe('Create Gym Service', () => {
  beforeEach(() => {
    gymRepository = new InMemoryGymRepository()
    sut = new GymService(gymRepository)
  })
  it('should be able to create a new gym', async () => {
    const { gym } = await sut.execute({
      title: 'Gym A',
      description: 'A great gym',
      phone: '123456789',
      latitude: -1.2092052,
      longitude: -5.01091,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
