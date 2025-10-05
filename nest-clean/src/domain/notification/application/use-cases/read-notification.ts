import { Either, left, right } from '@/core/either'
import { Notification } from '@/domain/notification/enterprise/entities/notification'
import { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'
import { ResourceNotFondError } from '@/core/errors/resource-not-found-error'
import { NotAllowedError } from '@/core/errors/not-allowed-error'

interface ReadNotificationUseCaseRequest {
  recipientId: string
  notificationId: string
}

type ReadNotificationUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedError,
  {
    notification: Notification
  }
>

export class ReadNotificationUseCase {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute({
    recipientId,
    notificationId,
  }: ReadNotificationUseCaseRequest): Promise<ReadNotificationUseCaseResponse> {
    const notification =
      await this.notificationRepository.findById(notificationId)

    if (!notification) {
      return left(new ResourceNotFondError())
    }

    if (notification.recipientId.toString() !== recipientId) {
      return left(new NotAllowedError())
    }

    notification.read()

    await this.notificationRepository.save(notification)

    return right({
      notification,
    })
  }
}
