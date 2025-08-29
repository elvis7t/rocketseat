import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFondError } from './errors/resource-not-found-error'
import { NotAllowedFondError } from './errors/not-allowed-error'

interface ChooseQuestionBestAnswerCaseRequest {
  authorId: string
  answerId: string
}

type ChooseQuestionBestAnswerCaseResponse = Either<
  ResourceNotFondError | NotAllowedFondError,
  {
    answer: Answer
  }
>

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private answersRepository: AnswersRepository,
  ) {}

  async execute({
    answerId,
    authorId,
  }: ChooseQuestionBestAnswerCaseRequest): Promise<ChooseQuestionBestAnswerCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFondError())
    }

    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    )

    if (!question) {
      return left(new ResourceNotFondError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new NotAllowedFondError())
    }

    question.bestAnswerId = answer.id

    await this.questionsRepository.save(question)

    return right({
      answer,
    })
  }
}
