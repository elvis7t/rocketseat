import {
    AnswerAttachment,
    AnswerAttachmentProps,
} from '@/domain/forum/enterprise/entities/answer-attachment'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export function makeAnswerAttachment(
    override: Partial<AnswerAttachmentProps> = {},
    id?: UniqueEntityId,
): AnswerAttachment {
    const answerattachment = AnswerAttachment.create(
        {

            answerId: new UniqueEntityId(),
            attachmentId: new UniqueEntityId(),
            ...override,
        },
        id,
    )

    return answerattachment
}
