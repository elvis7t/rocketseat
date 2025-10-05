import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { Either, left, right } from '@/core/either'
import { ResourceNotFondError } from '@/core/errors/resource-not-found-error'
import { Injectable } from '@nestjs/common'

interface CommentOnQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

type CommentOnQuestionUseCaseResponse = Either<
  ResourceNotFondError,
  {
    questionComment: QuestionComment
  }
>



@Injectable()
export class CommentOnQuestionUseCase {
  constructor(
    private questionRepository: QuestionsRepository,
    private questionCommentRepository: QuestionCommentsRepository,
  ) { }

  async execute({
    authorId,
    questionId,
    content,
  }: CommentOnQuestionUseCaseRequest): Promise<CommentOnQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)
    if (!question) {
      return left(new ResourceNotFondError())
    }
    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityId(authorId),
      questionId: new UniqueEntityId(questionId),
      content,
    })
    await this.questionCommentRepository.create(questionComment)
    return right({
      questionComment,
    })
  }
}
