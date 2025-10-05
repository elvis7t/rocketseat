import { Either, right } from '@/core/either'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/values-objects/comment-with-author'
import { Injectable } from '@nestjs/common'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionCommentsUseCaseRequestResponse = Either<
  null,
  {
    comments: CommentWithAuthor[]
  }
>

@Injectable()
export class FetchQuestionCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseRequestResponse> {
    const comments =
      await this.questionCommentsRepository.findManyByQuestionIdWithAuthor(questionId, {
        page,
      })

    return right({
      comments,
    })
  }
}
