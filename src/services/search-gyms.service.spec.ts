import 'reflect-metadata'
import { describe, it, expect, beforeEach } from 'vitest'
import { SearchGymsService } from './search-gyms.service'
import { InMemoryGymRepository } from '@/repository'
let gymsRepository: InMemoryGymRepository
let sut: SearchGymsService

describe('Search Gyms Service', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymRepository()
    sut = new SearchGymsService(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
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
      query: 'JavaScript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: 'JavaScriptGym' }),
      ]),
    )
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Gym ${i}`,
        description: 'A great gym',
        phone: '123456789',
        latitude: -1.2092052,
        longitude: -5.01091,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Gym',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: 'Gym 21' }),
        expect.objectContaining({ title: 'Gym 22' }),
      ]),
    )
  })
})
