import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { FetchAnswerCommentsUseCase } from './fetch-answer-comments'
import { InMemoryAnswerCommentsRepository } from '@test/repositories/in-memory-answer-comment-repository'
import { makeAnswerComment } from '@test/factory/make-answer-comment'

let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository
let sut: FetchAnswerCommentsUseCase
describe('Fetch  Answer Comments', () => {
  beforeEach(() => {
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository()
    // system under test
    sut = new FetchAnswerCommentsUseCase(inMemoryAnswerCommentsRepository)
  })

  it('should be able to fetch answer comments', async () => {
    await inMemoryAnswerCommentsRepository.create(
      makeAnswerComment({ answerId: new UniqueEntityId('answer-1') }),
    )
    await inMemoryAnswerCommentsRepository.create(
      makeAnswerComment({ answerId: new UniqueEntityId('answer-1') }),
    )
    await inMemoryAnswerCommentsRepository.create(
      makeAnswerComment({ answerId: new UniqueEntityId('answer-1') }),
    )

    const result = await sut.execute({
      answerId: 'answer-1',
      page: 1,
    })

    expect(result.value?.answerComments).toHaveLength(3)
  })

  it('should be able to fetch paginated answer comments', async () => {
    for (let i = 0; i < 22; i++) {
      await inMemoryAnswerCommentsRepository.create(
        makeAnswerComment({
          answerId: new UniqueEntityId('answer-1'),
        }),
      )
    }

    const result = await sut.execute({
      answerId: 'answer-1',
      page: 2,
    })

    expect(result.value?.answerComments).toHaveLength(2)
  })
})
