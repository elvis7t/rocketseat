import { container } from 'tsyringe'
import { ValidateCheckInService } from '../validate-check-in.service'

export function makeValidateCheckInServiceFactory() {
  return container.resolve(ValidateCheckInService)
}
