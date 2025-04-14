import { injectable } from 'tsyringe'
import { randomUUID } from 'crypto'

interface User {
  id: string
  name: string
  email: string
  password: string
  created_at: Date
}

@injectable()
export class UserRepository {
  private users: User[] = []

  async findAll(): Promise<User[]> {
    return this.users
  }

  async create(name: string, email: string, password: string): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name,
      email,
      password,
      created_at: new Date(),
    }

    this.users.push(user)
    return user
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email)
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id)
  }
}
