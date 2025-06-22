import 'reflect-metadata'
import { InMemoryCheckInsRepository } from '@/repository/in-memory-repository'
import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest'
import { CheckInService } from '@/services/check-in.service'
import { ResourceNotFoundError } from '@/errors/resource-not-found-error'

let checkInsRepository: InMemoryCheckInsRepository
let sut: CheckInService
describe('CheckIn Service', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInService(checkInsRepository)
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    vi.setSystemTime(new Date(2025, 5, 21, 10, 0, 0))
    const { checkIn } = await sut.execute({
      userId: 'user-1',
      gymId: 'gym-1',
    })

    expect(checkIn.id).toEqual(expect.any(String))
    expect(checkIn.user_id).toEqual('user-1')
    expect(checkIn.gym_id).toEqual('gym-1')
    expect(checkIn.checked_at).toEqual(expect.any(Date))
  })

  it('should not be able to check in twice on the same day', async () => {
    vi.setSystemTime(new Date(2025, 5, 21, 10, 0, 0))
    await sut.execute({
      userId: 'user-1',
      gymId: 'gym-1',
    })

    await expect(() =>
      sut.execute({
        userId: 'user-1',
        gymId: 'gym-1',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2025, 6, 21, 10, 0, 0))
    await sut.execute({
      userId: 'user-2',
      gymId: 'gym-1',
    })

    vi.setSystemTime(new Date(2025, 6, 22, 10, 0, 0))

    const { checkIn } = await sut.execute({
      userId: 'user-2',
      gymId: 'gym-1',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
