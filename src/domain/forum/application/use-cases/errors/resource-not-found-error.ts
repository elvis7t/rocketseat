import { UseCaseError } from '@/core/erros/use-case-error'

export class ResourceNotFondError extends Error implements UseCaseError {
  constructor() {
    super('Resource not found')
  }
}
