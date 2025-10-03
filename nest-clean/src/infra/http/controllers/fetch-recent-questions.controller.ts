import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipes'
import { QuestionPresenter } from '@/infra/http/presenter/question-presenter'
import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { z } from 'zod'

const pageQueryParamsSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamsSchema)

type PageQueryParamsSchema = z.infer<typeof pageQueryParamsSchema>

@Controller('/questions')
export class FetchRecentQuestionController {
  constructor(private fetchRecentQuestion: FetchRecentQuestionsUseCase) { }

  @Get()
  async handle(
    @Query('page', queryValidationPipe) page: PageQueryParamsSchema,
  ) {

    const result = await this.fetchRecentQuestion.execute({
      page,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const questions = result.value.questions

    return { questions: questions.map(QuestionPresenter.toHTTP) }
  }
}
