import { container } from 'tsyringe'
import { UserProfileService } from '../user.profile.service'

export function makeGetUserProfileServiceFactory() {
  return container.resolve(UserProfileService)
}
