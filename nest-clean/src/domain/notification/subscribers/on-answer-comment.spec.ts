import { makeAnswer } from '@test/factories/make-answer'
import { InMemoryAnswersRepository } from '@test/repositories/in-memory-answers-repository'
import { InMemoryAnswerAttachmentsRepository } from '@test/repositories/in-memory-answer-attachments-repository'
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { vi, type MockInstance } from 'vitest'
import { waitFor } from '@test/utils/wait-for'
import { OnAnswerComment } from './on-answer-comment'
import { InMemoryAnswerCommentsRepository } from '@test/repositories/in-memory-answer-comment-repository'
import { makeAnswerComment } from '@test/factories/make-answer-comment'

let inMemoryAnswersAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository
let sendNotificationUseCase: SendNotificationUseCase
let sendNotificationExecuteSpy: MockInstance<
  typeof sendNotificationUseCase.execute
>

describe('On Comment Answer ', () => {
  beforeEach(() => {
    inMemoryAnswersAttachmentsRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnswersAttachmentsRepository,
    )
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository()
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    sendNotificationUseCase = new SendNotificationUseCase(
      inMemoryNotificationsRepository,
    )
    sendNotificationExecuteSpy = vi.spyOn(sendNotificationUseCase, 'execute')
    new OnAnswerComment(
      inMemoryAnswerCommentsRepository,
      sendNotificationUseCase,
    )
  })
  it('should send a notification when an answer is commented', async () => {
    const answer = makeAnswer()

    inMemoryAnswersRepository.create(answer)
    const answerComment = makeAnswerComment({
      answerId: answer.id,
      content: 'Test comment',
    })
    inMemoryAnswerCommentsRepository.create(answerComment)

    await waitFor(() => {
      expect(sendNotificationExecuteSpy).toHaveBeenCalled()
    })
    expect(inMemoryAnswerCommentsRepository.items[0].content).toEqual(
      'Test comment',
    )
  })
})
