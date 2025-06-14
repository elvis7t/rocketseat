import 'reflect-metadata'
import { InMemoryUsersRepository } from '@/repository/in-memory-users-repository'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UserService } from './user.service'
import { AuthenticateService } from './authenticate.service'
import { hash } from 'bcryptjs'
import { UserInvalidCredentialsError } from '@/errors'

describe('Authenticate UserService', () => {




  it('should be able to authenticate', async () => {
    const userRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateService(userRepository)

    await userRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      password: '123456'
    })
    expect(user.id).toEqual(expect.any(String))
  })

  it('should be able to authenticate with wrong email', async () => {
    const userRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateService(userRepository)


    await expect(() => sut.execute({
      email: 'wrong.email@example.com',
      password: '123456'
    })).rejects.toBeInstanceOf(UserInvalidCredentialsError)
  })

  it('should be able to authenticate with wrong password', async () => {
    const userRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateService(userRepository)

    await userRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6),
    })

    await expect(() => sut.execute({
      email: 'johndoe@example.com',
      password: 'wrong-password'
    })).rejects.toBeInstanceOf(UserInvalidCredentialsError)
  })

  it('should be able to authenticate with valid credentials', async () => {
    const userRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateService(userRepository)

    await userRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      password: '123456'
    })
    expect(user.id).toEqual(expect.any(String))
  })
})