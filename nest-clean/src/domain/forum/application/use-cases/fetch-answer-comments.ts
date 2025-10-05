import { Either, right } from '@/core/either'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { Injectable } from '@nestjs/common'
import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/values-objects/comment-with-author'

interface FetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

type FetchAnswerCommentsUseCaseRequestResponse = Either<
  null,
  {
    comments: CommentWithAuthor[]
  }
>

@Injectable()
export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) { }

  async execute({
    answerId,
    page,
  }: FetchAnswerCommentsUseCaseRequest): Promise<FetchAnswerCommentsUseCaseRequestResponse> {
    const comments =
      await this.answerCommentsRepository.findManyByAnswerIdWithAuthor(answerId, {
        page,
      })

    return right({
      comments,
    })
  }
}
