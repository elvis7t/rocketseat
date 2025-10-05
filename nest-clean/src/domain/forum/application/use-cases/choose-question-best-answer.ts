import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFondError } from '@/core/errors/resource-not-found-error'
import { NotAllowedError } from '@/core/errors/not-allowed-error'
import { Injectable } from '@nestjs/common'

interface ChooseQuestionBestAnswerCaseRequest {
  authorId: string
  answerId: string
}

type ChooseQuestionBestAnswerCaseResponse = Either<
  ResourceNotFondError | NotAllowedError,
  {
    answer: Answer
  }
>

@Injectable()
export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private answersRepository: AnswersRepository,
  ) { }

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
      return left(new NotAllowedError())
    }

    question.bestAnswerId = answer.id

    await this.questionsRepository.save(question)

    return right({
      answer,
    })
  }
}
