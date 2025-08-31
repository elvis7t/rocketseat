import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { Either, left, right } from '@/core/either'
import { NotAllowedFondError } from './errors/not-allowed-error'
import { ResourceNotFondError } from './errors/resource-not-found-error'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswerAttachment } from '../../enterprise/entities/answer-attachment'
import { AnswerAttachmentList } from '../../enterprise/entities/answer-attachment-list'
import { AnswerAttachmentsRepository } from '../repositories/answer-attachments-repository'

interface EditAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
  attachmentIds?: string[]
}

type EditAnswerUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedFondError,
  { answer: Answer }
>
export class EditAnswerUseCase {
  constructor(
    private answerRepository: AnswersRepository,
    private answerAttachmentsRepository: AnswerAttachmentsRepository
  ) { }

  async execute({
    authorId,
    answerId,
    content,
    attachmentIds = [],
  }: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFondError())
    }

    if (answer.authorId.toString() !== authorId) {
      return left(new NotAllowedFondError())
    }

    const currentAnswerAttachments =
      await this.answerAttachmentsRepository.findManyByAnswerId(answerId)

    const answerAttachmentList = new AnswerAttachmentList(
      currentAnswerAttachments
    )

    const answerAttachments = attachmentIds.map((attachmentdId) => {
      return AnswerAttachment.create({
        attachmentId: new UniqueEntityId(attachmentdId),
        answerId: answer.id,
      })
    })

    answerAttachmentList.update(answerAttachments)

    answer.content = content
    answer.attachments = answerAttachmentList
    

    await this.answerRepository.save(answer)
    return right({
      answer,
    })
  }
}
