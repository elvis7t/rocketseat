import { inject, injectable } from 'tsyringe'
import { randomUUID } from 'crypto'
import { SqliteConfig } from '@/configs'
import { Meal } from '@/interfaces'

@injectable()
export class MealRepository {
  constructor(
    @inject('SqliteConfig') private readonly sqliteConfig: SqliteConfig,
  ) {
    this.sqliteConfig = sqliteConfig
  }

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

    const affectedRows = await knex<Meal>('meals')
      .where({ id })
      .update(updateData)

    if (affectedRows === 0) {
      return null // Nenhum registro foi atualizado (ID pode não existir)
    }

    const updatedMeal = await knex<Meal>('meals').where({ id }).first()
    return updatedMeal || null
  }

  public async delete(id: string): Promise<void> {
    const knex = this.sqliteConfig.getConnection()
    await knex<Meal>('meals').where({ id }).delete()
  }

  public async getAllMealByUserId(userId: string): Promise<Meal[]> {
    const knex = this.sqliteConfig.getConnection()
    return await knex<Meal>('meals').where({ user_id: userId })
  }

  public async getMealOnDietbyUser(
    userId: string,
    diet: bool,
  ): Promise<Meal[]> {
    const knex = this.sqliteConfig.getConnection()
    return await knex<Meal>('meals').where({
      user_id: userId,
      is_on_diet: diet,
    })
  }

  public async getLongestDietSequence(userId: string): Promise<number> {
    const knex = this.sqliteConfig.getConnection()
    const result = await knex.raw(
      `
      SELECT MAX(sequence) as longest_sequence FROM (
        SELECT COUNT(*) as sequence
        FROM (
          SELECT 
            is_on_diet,
            ROW_NUMBER() OVER (ORDER BY created_at) - 
            ROW_NUMBER() OVER (PARTITION BY is_on_diet ORDER BY created_at) as grp
          FROM meals
          WHERE user_id = ? AND is_on_diet = true
        ) subquery
        GROUP BY grp
      ) final_query
      `,
      [userId],
    )

    return result[0]?.longest_sequence || 0
  }
}
