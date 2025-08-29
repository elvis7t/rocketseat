import { InMemoryAnswerCommentsRepository } from '@test/repositories/in-memory-answer-comment-repository'
import { DeleteAnswerCommentUseCase } from './delete-answer-comment'
import { makeAnswerComment } from '@test/factory/make-answer-comment'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { NotAllowedFondError } from './errors/not-allowed-error'

let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository
let sut: DeleteAnswerCommentUseCase
describe('Delete Answer Comment ', () => {
  beforeEach(() => {
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository()
    // system under test
    sut = new DeleteAnswerCommentUseCase(inMemoryAnswerCommentsRepository)
  })

  it('should be able to delete a answer comment', async () => {
    const answerComment = makeAnswerComment()

    await inMemoryAnswerCommentsRepository.create(answerComment)

    await sut.execute({
      answerCommentId: answerComment.id.toString(),
      authorId: answerComment.authorId.toString(),
    })

    expect(inMemoryAnswerCommentsRepository.items).toHaveLength(0)
  })

  it('should not be able to delete another user answer comment', async () => {
    const answerComment = makeAnswerComment({
      authorId: new UniqueEntityId('author-1'),
    })

    await inMemoryAnswerCommentsRepository.create(answerComment)
    const result = await sut.execute({
      answerCommentId: answerComment.id.toString(),
      authorId: 'author-2',
    })
    expect(result.isLeft()).toBe(true)
    expect(result.value).instanceOf(NotAllowedFondError)
    expect(inMemoryAnswerCommentsRepository.items).toHaveLength(1)
  })
})
