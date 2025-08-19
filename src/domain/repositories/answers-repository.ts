import { Answer } from '@/domain/entities/answer'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
  findById(id: string): Promise<Answer | null>
  findByQuestionId(questionId: string): Promise<Answer[]>
}
