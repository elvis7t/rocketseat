import { makeAnswer } from "@test/factory/make-answer"
import { OnAnswerCreated } from "./on-answer-created"
import { InMemoryAnswersRepository } from "@test/repositories/in-memory-answers-repository"
import { InMemoryAnswerAttachmentsRepository } from "@test/repositories/in-memory-answer-attachments-repository"
import { InMemoryQuestionsRepository } from "@test/repositories/in-memory-questions-repository"
import { InMemoryQuestionAttachmentsRepository } from "@test/repositories/in-memory-question-attachments-repository"
import { SendNotificationUseCase, SendNotificationUseCaseRequest, SendNotificationUseCaseResponse } from "@/domain/notification/application/use-cases/send-notification"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { makeQuestion } from "@test/factory/make-question"
import { vi, type MockInstance } from 'vitest'
import { waitFor } from "@test/utils/wait-for"

let inMemoryQuestionsAttachmentsRepository: InMemoryQuestionAttachmentsRepository
let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryAnswersAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let sendNotificationUseCase: SendNotificationUseCase
let sendNotificationExecuteSpy: MockInstance<typeof sendNotificationUseCase.execute>;

describe('On Answer Created', () => {
    beforeEach(() => {
        inMemoryQuestionsAttachmentsRepository = new InMemoryQuestionAttachmentsRepository()
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository(inMemoryQuestionsAttachmentsRepository)
        inMemoryAnswersAttachmentsRepository = new InMemoryAnswerAttachmentsRepository()
        inMemoryAnswersRepository = new InMemoryAnswersRepository(inMemoryAnswersAttachmentsRepository)
        inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
        sendNotificationUseCase = new SendNotificationUseCase(inMemoryNotificationsRepository)
        sendNotificationExecuteSpy = vi.spyOn(sendNotificationUseCase, 'execute')
        new OnAnswerCreated(
            inMemoryQuestionsRepository,
            sendNotificationUseCase
        )
    })
    it('should send a notification when an answer is created', async () => {
        const question = makeQuestion()
        const answer = makeAnswer({ questionId: question.id })

        inMemoryQuestionsRepository.create(question)
        inMemoryAnswersRepository.create(answer)

        await waitFor(() => {
            expect(sendNotificationExecuteSpy).toHaveBeenCalled()
        })

    })
})