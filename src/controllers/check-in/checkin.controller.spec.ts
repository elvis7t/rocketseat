import { test, beforeAll, afterAll, describe, expect, beforeEach } from 'vitest'
import request from 'supertest'
import { main } from '../../app'
import { createAndAuthenticateUser } from '@/utils'
import { PrismaConfig } from '@/configs/prisma.config'
import { container } from 'tsyringe'

const { app } = main()
describe('CheckinController (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  beforeEach(() => {
    // Garante que cada teste use o container limpo
    container.clearInstances()
  })

  afterAll(async () => {
    await app.close()
  })

  test('should be able to create a checkin', async () => {
    try {
      const { token } = await createAndAuthenticateUser(app)

      // Obtém a instância do Prisma configurada pelo ambiente de teste
      const prismaConfig = container.resolve(PrismaConfig)
      const prisma = prismaConfig.getClient()

      // Verificar conexão com o banco
      console.log('Testando conexão com o banco...')
      const gymCount = await prisma.gym.count()
      console.log('Número de acadêmias no banco:', gymCount)

      console.log('Criando nova academia para teste...')

      const gym = await prisma.gym.create({
        data: {
          title: 'Gym 13',
          description: 'Description for Gym 1',
          phone: '11999999999',
          // Usando string para garantir que seja tratado corretamente como Decimal pelo Prisma
          latitude: '-27.2092052',
          longitude: '-49.6401091',
        },
      })

      console.log('Gym criado com sucesso:', {
        gymId: gym.id,
        gymTitle: gym.title,
      })

      const url = `/v1/gym/${gym.id}/check-in`
      console.log('URL da requisição:', url)

      console.log('Enviando requisição para check-in...')
      const response = await request(app.server)
        .post(url)
        .set('Authorization', `Bearer ${token}`)
        .send({
          latitude: -27.2092052,
          longitude: -49.6401091,
        })

      console.log('Resposta completa:', {
        statusCode: response.statusCode,
        body: response.body,
        error: response.error,
      })

      if (response.statusCode !== 201) {
        console.log('Erro na resposta:', response.body)
      }

      expect(response.statusCode).toEqual(201)
    } catch (error) {
      console.error('Erro durante o teste:', error)
      throw error
    }
  })

  test('should be able to list the history of checkins', async () => {
    const prismaConfig = container.resolve(PrismaConfig)
    const prisma = prismaConfig.getClient()
    const { token } = await createAndAuthenticateUser(app)
    const gym = await prisma.gym.create({
      data: {
        title: 'Gym 13',
        description: 'Description for Gym 1',
        phone: '11999999999',
        latitude: '-27.2092052',
        longitude: '-49.6401091',
      },
    })
    const user = await prisma.user.findFirstOrThrow()

    await prisma.checkIn.createMany({
      data: [
        {
          gym_id: gym.id,
          user_id: user.id,
        },
        {
          gym_id: gym.id,
          user_id: user.id,
        },
      ],
    })

    const response = await request(app.server)
      .get('/v1/check-in/history')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.checkIns).toEqual([
      expect.objectContaining({
        gym_id: gym.id,
        user_id: user.id,
      }),
      expect.objectContaining({
        gym_id: gym.id,
        user_id: user.id,
      }),
    ])
  })

  test('should be able to get the total count of check-ins', async () => {
    const prismaConfig = container.resolve(PrismaConfig)
    const prisma = prismaConfig.getClient()
    const { token } = await createAndAuthenticateUser(app)
    const gym = await prisma.gym.create({
      data: {
        title: 'Gym 13',
        description: 'Description for Gym 1',
        phone: '11999999999',
        latitude: '-27.2092052',
        longitude: '-49.6401091',
      },
    })
    const user = await prisma.user.findFirstOrThrow()

    await prisma.checkIn.createMany({
      data: [
        {
          gym_id: gym.id,
          user_id: user.id,
        },
        {
          gym_id: gym.id,
          user_id: user.id,
        },
      ],
    })

    const response = await request(app.server)
      .get('/v1/check-in/metrics')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.checkInsCount).toEqual(2)
  })

  test('should be able to validate a checkin', async () => {
    const { token } = await createAndAuthenticateUser(app)
    const prismaConfig = container.resolve(PrismaConfig)
    const prisma = prismaConfig.getClient()
    const user = await prisma.user.findFirstOrThrow()

    const gym = await prisma.gym.create({
      data: {
        title: 'Gym 13',
        description: 'Description for Gym 1',
        phone: '11999999999',
        latitude: '-27.2092052',
        longitude: '-49.6401091',
      },
    })

    const checkIn = await prisma.checkIn.create({
      data: {
        gym_id: gym.id,
        user_id: user.id,
      },
    })

    const response = await request(app.server)
      .patch(`/v1/check-in/${checkIn.id}/validate`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        latitude: -27.2092052,
        longitude: -49.6401091,
      })

    expect(response.statusCode).toEqual(204)
    const updatedCheckIn = await prisma.checkIn.findUniqueOrThrow({
      where: { id: checkIn.id },
    })

    expect(updatedCheckIn.validated_at).toEqual(expect.any(Date))
  })
})
