import { Either, left, right } from '@/core/either'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { ResourceNotFondError } from '@/core/errors/resource-not-found-error'
import { NotAllowedFondError } from '@/core/errors/not-allowed-error'

interface DeleteQuestionCommentUseCaseRequest {
  authorId: string
  questionCommentId: string
}

type DeleteQuestionCommentUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedFondError,
  null
>

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentRepository.findById(questionCommentId)

    if (!questionComment) {
      return left(new ResourceNotFondError())
    }

    if (questionComment.authorId.toString() !== authorId) {
      return left(new NotAllowedFondError())
    }

    await this.questionCommentRepository.delete(questionComment)
    return right(null)
  }
}
