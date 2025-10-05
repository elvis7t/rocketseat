import { faker } from '@faker-js/faker'
import {
  QuestionComment,
  QuestionCommentProps,
} from '@/domain/forum/enterprise/entities/question-comment'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export function makeQuestionComment(
  override: Partial<QuestionCommentProps> = {},
  id?: UniqueEntityId,
): QuestionComment {
  const questioncomment = QuestionComment.create(
    {
      authorId: new UniqueEntityId(),
      questionId: new UniqueEntityId(),
      content: faker.lorem.paragraph(),
      ...override,
    },
    id,
  )

  return questioncomment
}
