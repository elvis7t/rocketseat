import { Either, left, right } from '@/core/either'
import { ResourceNotFondError } from '@/core/errors/resource-not-found-error'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { QuestionDetails } from '@/domain/forum/enterprise/entities/values-objects/question-details'
import { Injectable } from '@nestjs/common'

interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

type GetQuestionBySlugUseCaseResponse = Either<
  ResourceNotFondError,
  {
    question: QuestionDetails
  }
>

@Injectable()
export class GetQuestionBySlugUseCase {
  constructor(private questionRepository: QuestionsRepository) { }

  async execute({
    slug,
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionRepository.findDetailsBySlug(slug)
    if (!question) {
      return left(new ResourceNotFondError())
    }
    return right({
      question,
    })
  }
}
