import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-quesion';

test('create an answer', () => {
    const answerQuestion = new AnswerQuestionUseCase()

    const answer = answerQuestion.execute({
        instructorId: '1-123',
        questionId: 'question-456',
        content: 'This is an answer',
    })
    
    expect(answer.content).toEqual('This is an answer');
})
