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

  test('create an answer', async () => {
    const { answer } = await sut.execute({
      questionId: 'question-456',
      instructorId: '1-123',
      content: 'This is an answer',
    })

    expect(answer.id).toBeTruthy()
    expect(answer.content).toEqual('This is an answer')
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})
