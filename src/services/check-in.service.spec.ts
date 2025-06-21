import 'reflect-metadata'
import { InMemoryCheckInsRepository } from '@/repository/in-memory-repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { CheckInService } from '@/services/check-in.service'

let checkInsRepository: InMemoryCheckInsRepository
let sut: CheckInService
describe('CheckIn Service', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInService(checkInsRepository)
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      userId: 'user-1',
      gymId: 'gym-1',
    })

    expect(checkIn.id).toEqual(expect.any(String))
    expect(checkIn.user_id).toEqual('user-1')
    expect(checkIn.gym_id).toEqual('gym-1')
    expect(checkIn.checked_at).toEqual(expect.any(Date))
  })
})
