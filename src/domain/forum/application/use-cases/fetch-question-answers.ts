import { Either, right } from '@/core/either'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionAnswersUseCaseRequestResponse = Either<
  null,
  {
    answers: Answer[]
  }
>
export class FetchQuestionAnswersUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseRequestResponse> {
    const answers = await this.answerRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return right({
      answers,
    })
  }
}
