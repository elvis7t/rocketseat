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
      // Validação com Zod
      const validatedInput = mealSchema.parse(input)

      const meal = await this.mealRepository.create({
        name: validatedInput.name,
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
}
