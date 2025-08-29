import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { Either, left, right } from '@/core/either'
import { NotAllowedFondError } from './errors/not-allowed-error'
import { ResourceNotFondError } from './errors/resource-not-found-error'

interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

type EditQuestionUseCaseResponse = Either<
  ResourceNotFondError | NotAllowedFondError,
  {
    question: Question
  }
>
export class EditQuestionUseCase {
  constructor(private questionRepository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
    title,
    content,
  }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFondError())
    }

    if (question.authorId.toString() !== authorId) {
      return left(new NotAllowedFondError())
    }

    question.title = title
    question.content = content

    await this.questionRepository.save(question)
    return right({
      question,
    })
  }
}
