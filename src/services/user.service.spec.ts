import 'reflect-metadata'
import { InMemoryUsersRepository } from '@/repository/in-memory-repository'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UserService } from './user.service'
import { compare } from 'bcryptjs'
import { UserAlreadyExistsError } from '@/errors/user.already-exists-error'

vi.mock('bcryptjs', () => ({
  hash: vi.fn(async (pw: string) => `hashed-${pw}`),
  compare: vi.fn(async (pw: string, hash: string) => hash === `hashed-${pw}`),
}))

let userRepository: InMemoryUsersRepository
let sut: UserService

describe('UserService', () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    sut = new UserService(userRepository)
  })
  it('should be able to create a new user', async () => {
    const user = await sut.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password_hash: '123456',
    })
    expect(user.id).toEqual(expect.any(String))
    expect(user.name).toEqual('John Doe')
  })

  it('should hash user password upon creation', async () => {
    const user = await sut.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    })

    const isPasswordHashed = await compare('123456', user.password_hash)

    expect(isPasswordHashed).toBe(true)
  })

  it('should not be able to register with same email twice', async () => {
    const email = 'johndoe@example.com'

    await sut.create({
      name: 'John Doe',
      email,
      password_hash: '123456',
    })

    await expect(() =>
      sut.create({
        name: 'John Doe',
        email,
        password_hash: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
