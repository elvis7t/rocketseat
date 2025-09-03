import { InMemoryAnswersRepository } from '@test/repositories/in-memory-answers-repository'
import { EditAnswerUseCase } from './edit-answer'
import { makeAnswer } from '@test/factory/make-answer'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotAllowedFondError } from '@/core/errors/not-allowed-error'
import { InMemoryAnswerAttachmentsRepository } from '@test/repositories/in-memory-answer-attachments-repository'
import { makeAnswerAttachment } from '@test/factory/make-anser-attachment'

let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: EditAnswerUseCase
describe('Edit Answer', () => {
  beforeEach(() => {
    inMemoryAnswerAttachmentsRepository = new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(inMemoryAnswerAttachmentsRepository)
    inMemoryAnswerAttachmentsRepository = new InMemoryAnswerAttachmentsRepository()
    // system under test
    sut = new EditAnswerUseCase(inMemoryAnswersRepository, inMemoryAnswerAttachmentsRepository )
  })

  it('should be able to edit a answer', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1'),
    )

    await inMemoryAnswersRepository.create(newAnswer)

    inMemoryAnswerAttachmentsRepository.items.push(
      makeAnswerAttachment({
        answerId: newAnswer.id,
        attachmentId: new UniqueEntityId('1')
      }),
      makeAnswerAttachment({
        answerId: newAnswer.id,
        attachmentId: new UniqueEntityId('2')
      })
    )

    await sut.execute({
      answerId: newAnswer.id.toValue(),
      authorId: 'author-1',
      content: 'New content',
      attachmentIds: ['1', '3'],
    })

    expect(inMemoryAnswersRepository.items[0]).toMatchObject({
      content: 'New content',
    })
    expect(
      inMemoryAnswersRepository.items[0].attachments.currentItems,
    ).toHaveLength(2)

    expect(
      inMemoryAnswersRepository.items[0].attachments.currentItems
    ).toEqual([
      expect.objectContaining({ attachmentId: new UniqueEntityId('1') }),
      expect.objectContaining({ attachmentId: new UniqueEntityId('3') }),
    ])
  })

  it('should not be able to edit a answer from another user', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1'),
    )

    await inMemoryAnswersRepository.create(newAnswer)
    const result = await sut.execute({
      answerId: newAnswer.id.toValue(),
      authorId: 'author-2',
      content: 'New content',
      attachmentIds: [],
    })
    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowedFondError)
  })
})
