import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { Either, left, right } from '@/core/either'
import { NotAllowedError } from '@/core/errors/not-allowed-error'
import { ResourceNotFondError } from '@/core/errors/resource-not-found-error'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'
import { AnswerAttachmentList } from '@/domain/forum/enterprise/entities/answer-attachment-list'
import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { Injectable } from '@nestjs/common'
interface EditAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
  attachmentIds?: string[]
}

type EditAnswerUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedError,
  { answer: Answer }
>

@Injectable()
export class EditAnswerUseCase {
  constructor(
    private answerRepository: AnswersRepository,
    private answerAttachmentsRepository: AnswerAttachmentsRepository,
  ) { }

  async execute({
    authorId,
    answerId,
    content,
    attachmentIds,
  }: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFondError())
    }

    if (answer.authorId.toString() !== authorId) {
      return left(new NotAllowedError())
    }

    answer.content = content

    if (attachmentIds !== undefined) {
      const currentAnswerAttachments =
        await this.answerAttachmentsRepository.findManyByAnswerId(answerId)

      const answerAttachmentList = new AnswerAttachmentList(
        currentAnswerAttachments,
      )

      const answerAttachments = attachmentIds.map((attachmentdId) => {
        return AnswerAttachment.create({
          attachmentId: new UniqueEntityId(attachmentdId),
          answerId: answer.id,
        })
      })

      answerAttachmentList.update(answerAttachments)

      answer.attachments = answerAttachmentList
    }

    await this.answerRepository.save(answer)
    return right({
      answer,
    })
  }
}
