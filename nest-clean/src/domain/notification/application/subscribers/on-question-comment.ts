import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { CommentOnQuestionEvent } from '@/domain/forum/enterprise/events/comment-on-question-event'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { Injectable } from '@nestjs/common'

@Injectable()
export class OnQuestionComment implements EventHandler {
  constructor(
    private questionCommentsRepository: QuestionCommentsRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendCommentQuestionNotification.bind(this),
      CommentOnQuestionEvent.name,
    )
  }

  private async sendCommentQuestionNotification(event: CommentOnQuestionEvent) {
    const { questionComment } = event

    const storedComment = await this.questionCommentsRepository.findById(
      questionComment.id.toString(),
    )

    if (!storedComment) {
      return
    }

    await this.sendNotification.execute({
      recipientId: storedComment.authorId.toString(),
      title: `Novo comentário na sua Pergunra: "${storedComment.questionId.toString()}"`,
      content: `Comentário: "${storedComment.content
        .substring(0, 120)
        .concat('...')}"`,
    })
  }
}
