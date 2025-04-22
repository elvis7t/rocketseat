import { inject, injectable } from 'tsyringe'
import { randomUUID } from 'crypto'
import { SqliteConfig } from '@/configs'
import { Meal } from '@/interfaces'

@injectable()
export class MealRepository {
  constructor(
    @inject('SqliteConfig') private readonly sqliteConfig: SqliteConfig,
  ) {}

  public async findAll(): Promise<Meal[]> {
    const knex = this.sqliteConfig.getConnection()
    return await knex<Meal>('meals').select('*')
  }

  public async create(meal: Omit<Meal, 'id'>): Promise<Meal> {
    const knex = this.sqliteConfig.getConnection()
    const newMeal: Meal = { ...meal, id: randomUUID() }

    await knex<Meal>('meals').insert(newMeal)
    return newMeal
  }

  public async findByUser(userId: string): Promise<Meal[]> {
    const knex = this.sqliteConfig.getConnection()
    return await knex<Meal>('meals').where({ user_id: userId })
  }

  public async findById(id: string): Promise<Meal | undefined> {
    const knex = this.sqliteConfig.getConnection()
    const result = await knex<Meal>('meals').where({ id }).first()
    return result
  }

  public async update(
    id: string,
    updateData: Partial<Meal>,
  ): Promise<Meal | null> {
    const knex = this.sqliteConfig.getConnection()
    const existing = await this.findById(id)
    if (!existing) return null

    await knex<Meal>('meals').where({ id }).update(updateData)
    return { ...existing, ...updateData }
  }

  public async delete(id: string): Promise<void> {
    const knex = this.sqliteConfig.getConnection()
    await knex<Meal>('meals').where({ id }).delete()
  }
}
