import { DomainEvent } from '@/core/events/domain-event'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class CommentOnAnswerEvent implements DomainEvent {
  public ocurredAt: Date
  public authorId: UniqueEntityId

  public answerComment: AnswerComment

  constructor(answerComment: AnswerComment, authorId: UniqueEntityId) {
    this.answerComment = answerComment
    this.authorId = authorId
    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueEntityId {
    return this.answerComment.id
  }
}
