import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { ReadNotificationUseCase } from './read-notification'
import { makeNotification } from '@test/factory/make-notification'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotAllowedFondError } from '@/core/errors/not-allowed-error'

let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let sut: ReadNotificationUseCase
describe('Read Notification', () => {
  beforeEach(() => {
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    // system under test
    sut = new ReadNotificationUseCase(inMemoryNotificationsRepository)
  })

  it('should be able to read a notification', async () => {
    const notification = makeNotification()

    inMemoryNotificationsRepository.create(notification)

    const result = await sut.execute({
      recipientId: notification.recipientId.toString(),
      notificationId: notification.id.toString(),
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryNotificationsRepository.items[0].readAt).toEqual(
      expect.any(Date),
    )
  })

  it('should not be able to read a notification from another user', async () => {
    const notification = makeNotification(
      {
        recipientId: new UniqueEntityId('recipient-1'),
      }
    )

    await inMemoryNotificationsRepository.create(notification)
    
    const result = await sut.execute({
      recipientId: 'recipient-2',
      notificationId: notification.id.toString(),
    })
    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowedFondError)
  })
})
