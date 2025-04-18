import { inject, injectable } from 'tsyringe'
import { randomUUID } from 'crypto'
import { SqliteConfig } from '@/configs'
import { Meal } from '@/interfaces'

@injectable()
@injectable()
export class MealRepository {
  constructor(
    @inject('SqliteConfig') private readonly sqliteConfig: SqliteConfig,
  ) {}

  public async findAll(): Promise<Meal[]> {
    const knex = this.sqliteConfig.getConnection()
    const meals = await knex<Meal>('meals').select('*')
    return meals
  }

  public async create(meal: Omit<Meal, 'id'>): Promise<Meal> {
    const newMeal = { ...meal, id: randomUUID() }
    this.meals.push(newMeal)
    return newMeal
  }

  public async findByUser(userId: string): Promise<Meal[]> {
    return this.meals.filter((m) => m.user_id === userId)
  }

  public async findById(id: string): Promise<Meal | undefined> {
    return this.meals.find((m) => m.id === id)
  }

  public async update(
    id: string,
    updateData: Partial<Meal>,
  ): Promise<Meal | null> {
    const index = this.meals.findIndex((m) => m.id === id)
    if (index === -1) return null

    this.meals[index] = { ...this.meals[index], ...updateData }
    return this.meals[index]
  }

  public async delete(id: string): Promise<void> {
    this.meals = this.meals.filter((m) => m.id !== id)
  }
}
