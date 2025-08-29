import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { Either, left, right } from '@/core/either'
import { NotAllowedFondError } from './errors/not-allowed-error'
import { ResourceNotFondError } from './errors/resource-not-found-error'

interface EditAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

type EditAnswerUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedFondError,
  { answer: Answer }
>
export class EditAnswerUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    authorId,
    answerId,
    content,
  }: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFondError())
    }

    if (answer.authorId.toString() !== authorId) {
      return left(new NotAllowedFondError())
    }

    answer.content = content

    await this.answerRepository.save(answer)
    return right({
      answer,
    })
  }
}
