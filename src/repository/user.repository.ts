import { inject, injectable } from 'tsyringe'
import { randomUUID } from 'crypto'
import { SqliteConfig } from '@/configs'
import { User } from '@/interfaces'

@injectable()
export class UserRepository {
  constructor(
    @inject('SqliteConfig') private readonly sqliteConfig: SqliteConfig,
  ) {
    this.sqliteConfig = sqliteConfig
  }

  public async findAll(): Promise<User[]> {
    const knex = this.sqliteConfig.getConnection()

    const users = await knex<User>('users').select('*')
    return users
  }

  public async create(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name,
      email,
      password,
      created_at: new Date(),
    }
    const knex = this.sqliteConfig.getConnection()
    await knex<User>('users').insert(user)
    return user
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const knex = this.sqliteConfig.getConnection()
    const user = await knex('users').where({ email }).first()
    return user
  }

  public async findById(id: string): Promise<User | undefined> {
    const knex = this.sqliteConfig.getConnection()

    const user = await knex<User>('users').where({ id }).first()
    return user
  }
}
