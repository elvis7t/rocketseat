import { Either, left, right } from '@/core/either'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { ResourceNotFondError } from '@/core/errors/resource-not-found-error'
import { NotAllowedFondError } from '@/core/errors/not-allowed-error'

interface DeleteAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

type DeleteAnswerUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedFondError,
  {}
>

export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    authorId,
    answerId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFondError())
    }

    if (answer.authorId.toString() !== authorId) {
      return left(new NotAllowedFondError())
    }

    await this.answerRepository.delete(answer)
    return right({})
  }
}
