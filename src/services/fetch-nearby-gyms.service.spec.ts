import 'reflect-metadata'
import { describe, it, expect, beforeEach } from 'vitest'
import { InMemoryGymRepository } from '@/repository'
import { FetchNearbyGymsService } from './fetch-nearby-gyms.service'
let gymsRepository: InMemoryGymRepository
let sut: FetchNearbyGymsService

describe('Fetch Nearby Gyms Service', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymRepository()
    sut = new FetchNearbyGymsService(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'JavaScriptGym',
      description: 'A great gym',
      phone: '123456789',
      latitude: -1.2092052,
      longitude: -5.01091,
    })

    await gymsRepository.create({
      title: 'Ts Gym',
      description: 'A great gym',
      phone: '123456789',
      latitude: -17.2092052,
      longitude: -35.01091,
    })

    const { gyms } = await sut.execute({
      userLatitude: -1.2092052,
      userLongitude: -5.01091,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: 'JavaScriptGym' }),
      ]),
    )
  })
})
