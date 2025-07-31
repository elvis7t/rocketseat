import 'reflect-metadata'
import { InMemoryCheckInsRepository } from '@/repository/in-memory-repository'
import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest'
import { ValidateCheckInService } from '@/services'

let checkInsRepository: InMemoryCheckInsRepository
let sut: ValidateCheckInService
describe('Validate CheckIn Service', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new ValidateCheckInService(checkInsRepository)
    vi.useRealTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to validate thecheck in', async () => {
    const createdCheckIn = await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-1',
    })

    const { checkIn } = await sut.execute({
      checkInId: createdCheckIn.id,
    })

    expect(checkIn.validated_at).toEqual(expect.any(Date))
    expect(checkInsRepository.checkIns[0].validated_at).toEqual(
      expect.any(Date),
    )
  })

  it('should  not be able to validate an inexistent check in', async () => {
    await expect(() =>
      sut.execute({
        checkInId: 'inexistent-check-in-id',
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it('should not be able to validate the check-in after 20 minutes of its creation', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2025, 6, 1, 10, 0, 0))

    const createdCheckIn = await checkInsRepository.create({
      user_id: 'user-1',
      gym_id: 'gym-1',
    })

    const twentyOneMinutesInMs = 1000 * 60 * 21

    vi.advanceTimersByTime(twentyOneMinutesInMs)

    await expect(() =>
      sut.execute({
        checkInId: createdCheckIn.id,
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
