import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from '@test/repositories/in-memory-answers-repository'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase
describe('AnswerQuestionUseCase', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    // system under test
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  test('should be able to create an answer', async () => {
    const result = await sut.execute({
      questionId: 'question-456',
      instructorId: '1-123',
      content: 'This is an answer',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryAnswersRepository.items[0]).toEqual(result.value?.answer)
  })
})
