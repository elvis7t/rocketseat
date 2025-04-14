import { injectable } from 'tsyringe'
import { randomUUID } from 'crypto'

interface Meal {
  id: string
  user_id: string
  name: string
  description?: string
  isOnDiet: boolean
  date: Date
}

@injectable()
export class MealRepository {
  private meals: Meal[] = []

  async create(meal: Omit<Meal, 'id'>): Promise<Meal> {
    const newMeal = { ...meal, id: randomUUID() }
    this.meals.push(newMeal)
    return newMeal
  }

  async findByUser(userId: string): Promise<Meal[]> {
    return this.meals.filter((m) => m.user_id === userId)
  }

  async findById(id: string): Promise<Meal | undefined> {
    return this.meals.find((m) => m.id === id)
  }

  async update(id: string, updateData: Partial<Meal>): Promise<Meal | null> {
    const index = this.meals.findIndex((m) => m.id === id)
    if (index === -1) return null

    this.meals[index] = { ...this.meals[index], ...updateData }
    return this.meals[index]
  }

  async delete(id: string): Promise<void> {
    this.meals = this.meals.filter((m) => m.id !== id)
  }
}
