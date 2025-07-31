import { container } from 'tsyringe'
import { FetchUserCheckInsHistoryService } from '../fetch-user-check-ins-history.service'

export function makeFetchUserCheckInsHistoryServiceFactory() {
  return container.resolve(FetchUserCheckInsHistoryService)
}
