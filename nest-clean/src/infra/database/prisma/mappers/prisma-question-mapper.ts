import { Question as PrismaQuestion, Prisma } from "@prisma/client"
import { UniqueEntityId } from "@/core/entities/unique-entity-id"
import { Question } from "@/domain/forum/enterprise/entities/question"
import { QuestionDetails } from "@/domain/forum/enterprise/entities/values-objects/question-details"
import { Slug } from "@/domain/forum/enterprise/entities/values-objects/slug"
import { PrismaAttachmentMapper } from "@/infra/database/prisma/mappers/prisma-attachment-mapper"

export class PrismaQuestionMapper {
    static toDomain(raw: PrismaQuestion): Question {
        return Question.create({
            title: raw.title,
            content: raw.content,
            authorId: new UniqueEntityId(raw.authorId),
            bestAnswerId: raw.bestAnswerId ? new UniqueEntityId(raw.bestAnswerId) : null,
            slug: Slug.create(raw.slug),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt

        }, new UniqueEntityId(raw.id))
    }

    static toPrisma(question: Question): Prisma.QuestionUncheckedCreateInput {
        return {
            id: question.id.toString(),
            authorId: question.authorId.toString(),
            bestAnswerId: question.bestAnswerId?.toString(),
            title: question.title,
            slug: question.slug.value,
            content: question.content,
            createdAt: question.createdAt,
            updatedAt: question.updatedAt
        }
    }

    static toDomainDetails(
        raw: Prisma.QuestionGetPayload<{
            include: {
                author: true
                attachments: true
            }
        }> 
    ): QuestionDetails {
        return QuestionDetails.create({
            questionId: new UniqueEntityId(raw.id),
            authorId: new UniqueEntityId(raw.authorId),
            author: raw.author.name,
            title: raw.title,
            content: raw.content,
            slug: Slug.create(raw.slug),
            attachments: raw.attachments.map((attachment) =>
                PrismaAttachmentMapper.toDomain(attachment),
            ),
            bestAnswerId: raw.bestAnswerId
                ? new UniqueEntityId(raw.bestAnswerId)
                : null,
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt,
        })
    }
}
