import { makeQuestion } from '@test/factory/make-question'
import { InMemoryQuestionsRepository } from '@test/repositories/in-memory-questions-repository'
import { InMemoryQuestionAttachmentsRepository } from '@test/repositories/in-memory-question-attachments-repository'
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { vi, type MockInstance } from 'vitest'
import { waitFor } from '@test/utils/wait-for'
import { OnQuestionComment } from './on-question-comment'
import { InMemoryQuestionCommentsRepository } from '@test/repositories/in-memory-question-comment-repository'
import { makeQuestionComment } from '@test/factory/make-question-comment'

let inMemoryQuestionsAttachmentsRepository: InMemoryQuestionAttachmentsRepository
let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let inMemoryQuestionCommentsRepository: InMemoryQuestionCommentsRepository
let sendNotificationUseCase: SendNotificationUseCase
let sendNotificationExecuteSpy: MockInstance<
  typeof sendNotificationUseCase.execute
>

describe('On Comment Question ', () => {
  beforeEach(() => {
    inMemoryQuestionsAttachmentsRepository =
      new InMemoryQuestionAttachmentsRepository()
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      inMemoryQuestionsAttachmentsRepository,
    )
    inMemoryQuestionCommentsRepository =
      new InMemoryQuestionCommentsRepository()
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    sendNotificationUseCase = new SendNotificationUseCase(
      inMemoryNotificationsRepository,
    )
    sendNotificationExecuteSpy = vi.spyOn(sendNotificationUseCase, 'execute')
    new OnQuestionComment(
      inMemoryQuestionCommentsRepository,
      sendNotificationUseCase,
    )
  })
  it('should send a notification when an question is commented', async () => {
    const question = makeQuestion()

    inMemoryQuestionsRepository.create(question)
    const questionComment = makeQuestionComment({
      questionId: question.id,
      content: 'Test comment',
    })
    inMemoryQuestionCommentsRepository.create(questionComment)

    await waitFor(() => {
      expect(sendNotificationExecuteSpy).toHaveBeenCalled()
    })
    expect(inMemoryQuestionCommentsRepository.items[0].content).toEqual(
      'Test comment',
    )
  })
})
