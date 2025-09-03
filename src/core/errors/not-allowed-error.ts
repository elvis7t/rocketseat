import { UseCaseError } from '@/core/errors/use-case-error'

export class NotAllowedFondError extends Error implements UseCaseError {
  constructor() {
    super('Not allowed')
  }
}
