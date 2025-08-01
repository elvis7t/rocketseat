import 'reflect-metadata'
import {
  InMemoryCheckInsRepository,
  InMemoryGymRepository,
} from '@/repository/in-memory-repository'
import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest'
import { CheckInService } from '@/services/check-in.service'
import { MaxDistanceError, ResourceNotFoundError } from '@/errors'

let checkInsRepository: InMemoryCheckInsRepository
let gymRepository: InMemoryGymRepository
let sut: CheckInService
describe('CheckIn Service', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    gymRepository = new InMemoryGymRepository()
    sut = new CheckInService(checkInsRepository, gymRepository)

    await gymRepository.create({
      id: 'gym-1',
      title: 'Gym 1',
      description: 'Description for Gym 1',
      latitude: -23.4284103,
      longitude: -46.5169565,
    })
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
      userLatitude: -23.4284103,
      userLongitude: -46.5169565,
    })

    expect(checkIn.id).toEqual(expect.any(String))
    expect(checkIn.user_id).toEqual('user-1')
    expect(checkIn.gym_id).toEqual('gym-1')
    expect(checkIn.checked_at).toEqual(expect.any(Date))
  })

  it('should not be able to check in on distant gym', async () => {
    gymRepository.create({
      id: 'gym-2',
      title: 'Gym 2',
      description: 'Description for Gym 2',
      latitude: -27.4284103,
      longitude: -49.5169565,
    })

    await expect(() =>
      sut.execute({
        userId: 'user-1',
        gymId: 'gym-2',
        userLatitude: -27.0784103,
        userLongitude: -49.4169565,
      }),
    ).rejects.toBeInstanceOf(MaxDistanceError)
  })

  it('should not be able to check in twice on the same day', async () => {
    vi.setSystemTime(new Date(2025, 5, 21, 10, 0, 0))
    await sut.execute({
      userId: 'user-1',
      gymId: 'gym-1',
      userLatitude: -23.4284103,
      userLongitude: -46.5169565,
    })

    await expect(() =>
      sut.execute({
        userId: 'user-1',
        gymId: 'gym-1',
        userLatitude: -23.4284103,
        userLongitude: -46.5169565,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2025, 6, 21, 10, 0, 0))
    await sut.execute({
      userId: 'user-2',
      gymId: 'gym-1',
      userLatitude: -23.4284103,
      userLongitude: -46.5169565,
    })

    vi.setSystemTime(new Date(2025, 6, 22, 10, 0, 0))

    const { checkIn } = await sut.execute({
      userId: 'user-2',
      gymId: 'gym-1',
      userLatitude: -23.4284103,
      userLongitude: -46.5169565,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
