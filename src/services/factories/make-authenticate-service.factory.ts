import { container } from 'tsyringe'
import { AuthenticateService } from '../authenticate.service'

export function makeAuthenticateServiceFactory() {
  return container.resolve(AuthenticateService)
}
