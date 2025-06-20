import 'reflect-metadata'
import { hash } from 'bcryptjs'
import { describe, it, expect, beforeEach } from 'vitest'
import { InMemoryUsersRepository } from '@/repository/in-memory-users-repository'
import { UserProfileService } from './user.profile.service'
import { UserAlreadyExistsError } from '@/errors/user.already-exists-error'
let userRepository: InMemoryUsersRepository
let sut: UserProfileService

describe('Get User Profile UserService', () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    sut = new UserProfileService(userRepository)
  })

  it('should be able to get user profile', async () => {
    const createdUser = await userRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    expect(user.name).toEqual('John Doe')
  })

  it('shoud not to able to get user profile with wrong id', async () => {
    await expect(
      sut.execute({
        userId: 'non-exising-id',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
