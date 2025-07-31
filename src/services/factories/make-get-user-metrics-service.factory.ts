import { container } from 'tsyringe'
import { GetUserMetricsService } from '../get-user-metrics.service'

export function makeGetUserMetricsServiceFactory() {
  return container.resolve(GetUserMetricsService)
}
