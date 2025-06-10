import 'reflect-metadata'
import { InMemoryUsersRepository } from '@/repository/in-memory-users-repository'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UserService } from './user.service'
import { compare } from 'bcryptjs'
import { UserAlreadyExistsError } from '@/errors/user.already-exists-error'

vi.mock('bcryptjs', () => ({
  hash: vi.fn(async (pw: string) => `hashed-${pw}`),
  compare: vi.fn(async (pw: string, hash: string) => hash === `hashed-${pw}`),
}))

const mockUserRepository = () =>
({
  findByEmail: vi.fn(),
  findAll: vi.fn(),
  create: vi.fn(),
} as unknown as UserRepository)

describe('UserService', () => {
  it('should be able to create a new user', async () => {
    const userRepository = new InMemoryUsersRepository()
    const userService = new UserService(userRepository)

    const user = await userService.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password_hash: '123456',
    })

    const isPasswordHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordHashed).toBe(true)
  })
  
  it('should not be able to register with same email twice', async () => {
    const userRepository = new InMemoryUsersRepository()
    const userService = new UserService(userRepository)

    const email = 'johndoe@example.com'

    await userService.create({
      name: 'John Doe',
      email,
      password_hash: '123456',
    })

    expect(() =>
      userService.create({
        name: 'John Doe',
        email,
        password_hash: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})

describe('UserService mock', () => {
  let userRepository: UserRepository
  let userService: UserService

  beforeEach(() => {
    userRepository = mockUserRepository()
    userService = new UserService(userRepository)
    vi.clearAllMocks()
  })

  describe('findUserByEmail', () => {
    it('should return user if found', async () => {
      const user = { id: 1, email: 'test@mail.com', name: 'Test', password_hash: 'hash' }
      userRepository.findByEmail = vi.fn().mockResolvedValue(user)
      const result = await userService.findUserByEmail('test@mail.com')
      expect(result).toEqual(user)
    })

    it('should throw error if user not found', async () => {
      userRepository.findByEmail = vi.fn().mockResolvedValue(null)
      await expect(userService.findUserByEmail('notfound@mail.com')).rejects.toThrow(
        'User with email notfound@mail.com not found'
      )
    })
  })

  describe('findAll', () => {
    it('should return all users', async () => {
      const users = [{ id: 1, email: 'a', name: 'A', password_hash: 'h' }]
      userRepository.findAll = vi.fn().mockResolvedValue(users)
      const result = await userService.findAll()
      expect(result).toEqual(users)
    })

    it('should throw error if no users found', async () => {
      userRepository.findAll = vi.fn().mockResolvedValue(null)
      await expect(userService.findAll()).rejects.toThrow('No users found')
    })
  })

  describe('create', () => {
    const validInput = {
      name: 'Test',
      email: 'test@mail.com',
      password_hash: '123456',
    }

    it('should create a new user if email does not exist', async () => {
      userRepository.findByEmail = vi.fn().mockResolvedValue(null)
      userRepository.create = vi.fn().mockResolvedValue({ ...validInput, id: 1, password_hash: 'hashed-123456' })
      const user = await userService.create(validInput)
      expect(userRepository.create).toHaveBeenCalledWith({
        name: validInput.name,
        email: validInput.email,
        password_hash: 'hashed-123456',
      })
      expect(user).toMatchObject({ name: 'Test', email: 'test@mail.com' })
    })

    it('should throw UserAlreadyExistsError if email exists', async () => {
      userRepository.findByEmail = vi.fn().mockResolvedValue({ ...validInput, id: 1 })
      await expect(userService.create(validInput)).rejects.toBeInstanceOf(UserAlreadyExistsError)
    })

    it('should throw error if validation fails', async () => {
      const invalidInput = { ...validInput, email: 'invalid-email' }
      await expect(userService.create(invalidInput as any)).rejects.toThrow(/Validation failed/)
    })
  })
}) 