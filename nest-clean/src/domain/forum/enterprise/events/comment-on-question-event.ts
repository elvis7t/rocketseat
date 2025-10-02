import { DomainEvent } from '@/core/events/domain-event'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class CommentOnQuestionEvent implements DomainEvent {
  public ocurredAt: Date
  public authorId: UniqueEntityId

  public questionComment: QuestionComment

  constructor(questionComment: QuestionComment, authorId: UniqueEntityId) {
    this.questionComment = questionComment
    this.authorId = authorId
    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueEntityId {
    return this.questionComment.id
  }
}
