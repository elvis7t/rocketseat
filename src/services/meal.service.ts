import { injectable, inject } from 'tsyringe'
import { MealRepository } from '@/repository'
import { Meal } from '@/interfaces'

@injectable()
export class MealService {
  constructor(
    @inject('MealRepository')
    private readonly mealRepository: MealRepository,
  ) {}

  public async findAll(): Promise<Meal[]> {
    const meals = await this.mealRepository.findAll()
    if (!meals) {
      throw new Error('No meals found')
    }
    return meals
  }

  public async create(
    name: string,
    calories: number,
    protein: number,
    fat: number,
    carbohydrates: number,
  ): Promise<Meal> {
    const existingMeal = await this.mealRepository.findByName(name)
    if (existingMeal) {
      throw new Error(`Meal with name ${name} already exists`)
    }

    const meal = await this.mealRepository.create(
      name,
      calories,
      protein,
      fat,
      carbohydrates,
    )
    return meal
  }
}
