import { Question } from '@/domain/forum/enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

  const { question } = await createQuestion.execute({
    authorId: '1-123',
    title: 'Nova Pergunta',
    content: 'Conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
