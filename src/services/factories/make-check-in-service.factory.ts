import { container } from 'tsyringe'
import { CheckInService } from '../check-in.service'

export function makeCheckInServiceFactory() {
  return container.resolve(CheckInService)
}
