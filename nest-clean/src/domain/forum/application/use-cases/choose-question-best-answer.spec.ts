import { InMemoryAnswersRepository } from '@test/repositories/in-memory-answers-repository'
import { InMemoryQuestionsRepository } from '@test/repositories/in-memory-questions-repository'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/choose-question-best-answer'
import { makeAnswer } from '@test/factories/make-answer'
import { makeQuestion } from '@test/factories/make-question'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotAllowedFondError } from '@/core/errors/not-allowed-error'
import { InMemoryAnswerAttachmentsRepository } from '@test/repositories/in-memory-answer-attachments-repository'
import { InMemoryQuestionAttachmentsRepository } from '@test/repositories/in-memory-question-attachments-repository'

let inMemoryQuestionAttachmentsRepository: InMemoryQuestionAttachmentsRepository
let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: ChooseQuestionBestAnswerUseCase
describe('Choose Question Best Answer', () => {
  beforeEach(() => {
    inMemoryQuestionAttachmentsRepository =
      new InMemoryQuestionAttachmentsRepository()
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      inMemoryQuestionAttachmentsRepository,
    )
    inMemoryAnswerAttachmentsRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnswerAttachmentsRepository,
    )
    // system under test
    sut = new ChooseQuestionBestAnswerUseCase(
      inMemoryQuestionsRepository,
      inMemoryAnswersRepository,
    )
  })

  it('should be able to choose a question best answer', async () => {
    const question = makeQuestion()

    const answer = makeAnswer({
      questionId: question.id,
    })

    await inMemoryAnswersRepository.create(answer)
    await inMemoryQuestionsRepository.create(question)

    await sut.execute({
      answerId: answer.id.toString(),
      authorId: question.authorId.toString(),
    })

    expect(inMemoryQuestionsRepository.items[0].bestAnswerId).toEqual(answer.id)
  })

  it('should not be able to choose a question best answer from another user', async () => {
    const question = makeQuestion({
      authorId: new UniqueEntityId('author-1'),
    })

    const answer = makeAnswer({
      questionId: question.id,
    })

    await inMemoryAnswersRepository.create(answer)
    await inMemoryQuestionsRepository.create(question)

    await sut.execute({
      answerId: answer.id.toString(),
      authorId: question.authorId.toString(),
    })
    const result = await sut.execute({
      answerId: answer.id.toString(),
      authorId: 'author-2',
    })
    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowedFondError)
  })
})
