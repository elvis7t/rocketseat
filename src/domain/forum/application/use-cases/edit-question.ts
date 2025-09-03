import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { Either, left, right } from '@/core/either'
import { NotAllowedFondError } from '@/core/errors/not-allowed-error'
import { ResourceNotFondError } from '@/core/errors/resource-not-found-error'
import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionAttachmentList } from '@/domain/forum/enterprise/entities/question-attachment-list'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'

interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
  attachmentIds: string[]
}

type EditQuestionUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedFondError,
  {
    question: Question
  }
>
export class EditQuestionUseCase {
  constructor(
    private questionRepository: QuestionsRepository,
    private questionAttachmentsRepository: QuestionAttachmentsRepository,
  ) {}

  async execute({
    authorId,
    questionId,
    title,
    content,
    attachmentIds,
  }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFondError())
    }

    if (question.authorId.toString() !== authorId) {
      return left(new NotAllowedFondError())
    }

    const currentQuestionAttachments =
      await this.questionAttachmentsRepository.findManyByQuestionId(questionId)

    const questionAttachmentList = new QuestionAttachmentList(
      currentQuestionAttachments,
    )

    const questionAttachments = attachmentIds.map((attachmentdId) => {
      return QuestionAttachment.create({
        attachmentId: new UniqueEntityId(attachmentdId),
        questionId: question.id,
      })
    })

    questionAttachmentList.update(questionAttachments)

    question.title = title
    question.content = content
    question.attachments = questionAttachmentList

    await this.questionRepository.save(question)
    return right({
      question,
    })
  }
}
