import { Either, left, right } from '@/core/either'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'
import { ResourceNotFondError } from './errors/resource-not-found-error'
import { NotAllowedFondError } from './errors/not-allowed-error'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedFondError,
  {}
>

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentRepository.findById(answerCommentId)

    if (!answerComment) {
      return left(new ResourceNotFondError())
    }

    if (answerComment.authorId.toString() !== authorId) {
      return left(new NotAllowedFondError())
    }

    await this.answerCommentRepository.delete(answerComment)
    return right({})
  }
}
