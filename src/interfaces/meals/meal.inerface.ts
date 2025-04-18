export interface Meal {
  id: string
  user_id: string
  name: string
  description?: string
  isOnDiet: boolean
  date: Date
}
