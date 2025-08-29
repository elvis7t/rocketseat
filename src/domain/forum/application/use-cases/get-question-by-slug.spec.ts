import { InMemoryQuestionsRepository } from '@test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { makeQuestion } from '@test/factory/make-question'
import { Slug } from '@/domain/forum/enterprise/entities/values-objects/slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase
describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    // system under test
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to get a question by slug', async () => {
    const newQuestion = makeQuestion({
      slug: Slug.create('example-question'),
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    const result = await sut.execute({
      slug: 'example-question',
    })

    expect(result.value?.question.id).toBeTruthy()
    expect(result.value?.question.title).toBe(newQuestion.title)
    expect(result.value?.question.content).toBe(newQuestion.content)
  })
})
