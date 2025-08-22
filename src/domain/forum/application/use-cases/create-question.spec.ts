import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from '@test/repositories/in-memory-questions-repository'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase
describe('CreateQuestionUseCase', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    // system under test
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1-123',
      title: 'Nova Pergunta',
      content: 'Conteúdo da pergunta',
    })

    expect(question.id).toBeTruthy()
  })
})
