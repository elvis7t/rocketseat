import { InMemoryQuestionsRepository } from '@test/repositories/in-memory-questions-repository'
import { EditQuestionUseCase } from './edit-question'
import { makeQuestion } from '@test/factory/make-question'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotAllowedFondError } from './errors/not-allowed-error'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: EditQuestionUseCase
describe('Edit Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    // system under test
    sut = new EditQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to edit a question', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('question-1'),
    )

    await inMemoryQuestionsRepository.create(newQuestion)

    await sut.execute({
      questionId: newQuestion.id.toValue(),
      authorId: 'author-1',
      title: 'New title',
      content: 'New content',
    })

    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
      title: 'New title',
      content: 'New content',
    })
  })

  it('should not be able to edit a question from another user', async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('question-1'),
    )

    await inMemoryQuestionsRepository.create(newQuestion)
    const result = await sut.execute({
      questionId: newQuestion.id.toValue(),
      authorId: 'author-2',
      title: 'New title',
      content: 'New content',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(NotAllowedFondError)
  })
})
