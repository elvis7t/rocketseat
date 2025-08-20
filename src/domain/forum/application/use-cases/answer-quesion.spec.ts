import { AnswerQuestionUseCase } from './answer-quesion'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'

const fakeAnswersRepository: AnswersRepository = {
  create: async () => {
    return Promise.resolve()
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    content: 'This is an answer',
    instructorId: '1-123',
    questionId: 'question-456',
  })

  expect(answer.content).toEqual('This is an answer')
})
