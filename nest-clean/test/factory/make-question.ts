import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/values-objects/slug'
import { PrismaQuestionMapper } from '@/infra/database/prisma/mappers/prisma-question-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityId,
): Question {
  const title = override.title ?? faker.lorem.sentence()
  const slug = override.slug ?? Slug.createFromText(`${title}-${faker.string.uuid()}`)
  const content = override.content ?? faker.lorem.text()
  const authorId = override.authorId ?? new UniqueEntityId()

  const question = Question.create(
    {
      authorId,
      title,
      content,
      slug,
      ...override,
    },
    id,
  )

  return question
}

@Injectable()
export class QuestionFactory {
  constructor(private prisma: PrismaService) { }

  async makePrismaQuestion(
    data: Partial<QuestionProps> = {},
  ): Promise<Question> {
    const question = makeQuestion(data)

    await this.prisma.question.create({
      data: PrismaQuestionMapper.toPrisma(question),
    })

    return question
  }
}
