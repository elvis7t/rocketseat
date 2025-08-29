import { Either, left, right } from '@/core/either'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { NotAllowedFondError } from './errors/not-allowed-error'
import { ResourceNotFondError } from './errors/resource-not-found-error'

interface DeleteQuestionUseCaseRequest {
  authorId: string
  questionId: string
}

type DeleteQuestionUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedFondError,
  {}
>

export class DeleteQuestionUseCase {
  constructor(private questionRepository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFondError())
    }

    if (question.authorId.toString() !== authorId) {
      return left(new NotAllowedFondError())
    }

    await this.questionRepository.delete(question)
    return right({})
  }
}
