import { container } from 'tsyringe'
import { SearchGymsService } from '../search-gyms.service'

export function makeSearchGymsServiceFactory() {
  return container.resolve(SearchGymsService)
}
