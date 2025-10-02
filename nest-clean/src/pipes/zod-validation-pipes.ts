import { PipeTransform, BadRequestException } from '@nestjs/common'
import { ZodTypeAny, ZodError, z } from 'zod'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodTypeAny) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value)
    } catch (error) {
      if (error instanceof ZodError) {
        const detailedErrors = z.treeifyError(error)
        throw new BadRequestException({
          message: 'Validation failed',
          errors: detailedErrors,
          statusCode: 400,
        })
      }

      throw new BadRequestException('Validation failed')
    }
  }
}
