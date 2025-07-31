import { container } from 'tsyringe'
import { FetchNearbyGymsService } from '../fetch-nearby-gyms.service'

export function makeFetchNearbyGymsServiceFactory() {
  return container.resolve(FetchNearbyGymsService)
}
