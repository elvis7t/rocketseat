export interface Meal {
  id: string
  user_id: string
  title: string
  description?: string
  isOnDiet: boolean
  date: Date
}
