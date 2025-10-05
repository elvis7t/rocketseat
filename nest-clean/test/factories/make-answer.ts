import { faker } from '@faker-js/faker'
import { Answer, AnswerProps } from '@/domain/forum/enterprise/entities/answer'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { PrismaAnswerMapper } from '@/infra/database/prisma/mappers/prisma-answer-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

export function makeAnswer(
  override: Partial<AnswerProps> = {},
  id?: UniqueEntityId,
): Answer {
  const answer = Answer.create(
    {
      authorId: new UniqueEntityId(),
      questionId: new UniqueEntityId(),
      content: faker.lorem.paragraph(),
      ...override,
    },
    id,
  )

  return answer
}

@Injectable()
export class AnswerFactory {
  constructor(private prisma: PrismaService) { }

  async makePrismaAnswer(data: Partial<AnswerProps> = {}): Promise<Answer> {
    const answer = makeAnswer(data)

    await this.prisma.answer.create({
      data: PrismaAnswerMapper.toPrisma(answer),
    })

    await this.prisma.attachment.createMany({
      data: Array.from({ length: 2 }).map(() => ({
        id: new UniqueEntityId().toString(),
        title: faker.lorem.words(4),
        url: faker.internet.url(),
        answerId: answer.id.toString(),
      })),
    })

    return answer
  }
}
