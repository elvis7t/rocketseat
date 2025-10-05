import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFondError } from '@/core/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'

interface CommentOnAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

type CommentOnAnswerUseCaseResponse = Either<
  ResourceNotFondError,
  {
    answerComment: AnswerComment
  }
>

@Injectable()
export class CommentOnAnswerUseCase {
  constructor(
    private answerRepository: AnswersRepository,
    private answerCommentRepository: AnswerCommentsRepository,
  ) {}

  async execute({
    authorId,
    answerId,
    content,
  }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)
    if (!answer) {
      return left(new ResourceNotFondError())
    }
    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityId(authorId),
      answerId: new UniqueEntityId(answerId),
      content,
    })
    await this.answerCommentRepository.create(answerComment)
    return right({
      answerComment,
    })
  }
}
