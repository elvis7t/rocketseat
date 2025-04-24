import { injectable, inject } from 'tsyringe'
import { MealRepository } from '@/repository'
import { Meal } from '@/interfaces'
import { mealSchema, MealInput } from '../validators'
import { ZodError } from 'zod'

@injectable()
export class MealService {
  constructor(
    @inject('MealRepository')
    private readonly mealRepository: MealRepository,
  ) {}

  public async findAll(): Promise<Meal[]> {
    const meals = await this.mealRepository.findAll()

    return meals
  }

  public async create(input: MealInput): Promise<Meal> {
    try {
      const validatedInput = mealSchema.parse(input)
      const meal = await this.mealRepository.create({
        title: validatedInput.title,
        description: validatedInput.description,
        is_on_diet: validatedInput.is_on_diet,
        user_id: validatedInput.user_id,
      })

      return meal
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(
          `Validation failed: ${error.errors.map((e) => e.message).join(', ')}`,
        )
      }
      throw error
    }
  }

  public async update(input: MealInput): Promise<Meal> {
    const validatedInput = mealSchema.parse(input)
    try {
      const existingMeal = await this.mealRepository.findById(validatedInput.id)

      if (!existingMeal) {
        throw new Error(`Meal with id ${validatedInput.id} not found`)
      }

      const updatedMeal = await this.mealRepository.update(
        validatedInput.id,
        validatedInput,
      )
      return updatedMeal
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(
          `Validation failed: ${error.errors.map((e) => e.message).join(', ')}`,
        )
      }
      throw error
    }
  }

  public async delete(id: string): Promise<void> {
    const existingMeal = await this.mealRepository.findById(id)

    if (!existingMeal) {
      throw new Error(`Meal with id ${id} not found`)
    }

    await this.mealRepository.delete(id)
  }

  public async findById(id: string): Promise<Meal | null> {
    const meal = await this.mealRepository.findById(id)
    return meal
  }

  public async findByUserId(userId: string): Promise<Meal[]> {
    const meals = await this.mealRepository.getAllMealByUserId(userId)
    return meals
  }
}
