import { UseCaseError } from '@/core/erros/use-case-error'

export class NotAllowedFondError extends Error implements UseCaseError {
  constructor() {
    super('Not allowed')
  }
}
