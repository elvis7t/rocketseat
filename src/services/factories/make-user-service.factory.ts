import { container } from 'tsyringe'
import { UserService } from '../user.service'

export function makeUserServiceFactory() {
  return container.resolve(UserService)
}
