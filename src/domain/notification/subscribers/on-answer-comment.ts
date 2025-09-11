import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { CommentOnAnswerEvent } from '@/domain/forum/enterprise/events/comment-on-answer-event'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'

export class OnAnswerComment implements EventHandler {
  constructor(
    private answerCommentsRepository: AnswerCommentsRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendCommentAnswerNotification.bind(this),
      CommentOnAnswerEvent.name,
    )
  }

  private async sendCommentAnswerNotification(event: CommentOnAnswerEvent) {
    const { answerComment } = event

    const storedComment = await this.answerCommentsRepository.findById(
      answerComment.id.toString(),
    )

    if (!storedComment) {
      return
    }

    await this.sendNotification.execute({
      recipientId: storedComment.authorId.toString(),
      title: `Novo comentário na sua resposta: "${storedComment.answerId.toString()}"`,
      content: `Comentário: "${storedComment.content
        .substring(0, 120)
        .concat('...')}"`,
    })
  }
}
