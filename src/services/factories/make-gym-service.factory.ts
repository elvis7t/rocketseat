import { container } from 'tsyringe'
import { GymService } from '../gym.service'

export function makeGymServiceFactory() {
  return container.resolve(GymService)
}
