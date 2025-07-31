import 'reflect-metadata'
import { InMemoryCheckInsRepository } from '@/repository/in-memory-repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { GetUserMetricsService } from './get-user-metrics.service'

let checkInsRepository: InMemoryCheckInsRepository
let sut: GetUserMetricsService

describe('Get User Metrics Service', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new GetUserMetricsService(checkInsRepository)
  })

  it('should be able to get check-in count from metrics', async () => {
    await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-1',
      checkedAt: new Date(),
    })

    await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-2',
      checkedAt: new Date(),
    })

    const { checkInsCount } = await sut.execute({
      userId: 'user-1',
    })

    expect(checkInsCount).toEqual(2)
  })
})
