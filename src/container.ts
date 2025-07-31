import { container } from 'tsyringe'
import { EnvConfig, FastifyConfig, PrismaConfig } from './configs'
import { Router as RouterInterface } from '@/interfaces'
import { Router } from './routes/router'
import {
  AuthenticateController,
  ProfileController,
  CheckInController,
  RefreshController,
  UserController,
  GymController,
} from './controllers'
import { GymRouter } from './routes/gym.router'
import { UserRouter } from './routes/user.router'
import { CheckInRouter } from './routes/check-in.router'
import { AuthMiddleware, AccessMiddleware } from './middlewares'
import { UserRepository, GymRepository, CheckInsRepository } from './repository'
import {
  FetchUserCheckInsHistoryService,
  ValidateCheckInService,
  FetchNearbyGymsService,
  GetUserMetricsService,
  AuthenticateService,
  UserProfileService,
  SearchGymsService,
  UserService,
} from './services'
import { InMemoryUsersRepository } from './repository/in-memory-repository'
import {
  makeFetchUserCheckInsHistoryServiceFactory,
  makeFetchNearbyGymsServiceFactory,
  makeValidateCheckInServiceFactory,
  makeGetUserMetricsServiceFactory,
  makeGetUserProfileServiceFactory,
  makeAuthenticateServiceFactory,
  makeSearchGymsServiceFactory,
  makeCheckInServiceFactory,
  makeUserServiceFactory,
  makeGymServiceFactory,
} from './services/factories'

container.registerSingleton<AccessMiddleware>(
  'AccessMiddleware',
  AccessMiddleware,
)
container.registerSingleton<UserController>('UserController', UserController)
container.registerSingleton<AuthMiddleware>('AuthMiddleware', AuthMiddleware)
container.registerSingleton<UserRepository>('UserRepository', UserRepository)
container.registerSingleton<RouterInterface>('CheckInRouter', CheckInRouter)
container.registerSingleton<GymController>('GymController', GymController)
container.registerSingleton<FastifyConfig>('FastifyConfig', FastifyConfig)
container.registerSingleton<GymRepository>('GymRepository', GymRepository)
container.registerSingleton<PrismaConfig>('PrismaConfig', PrismaConfig)
container.registerSingleton<RouterInterface>('UserRouter', UserRouter)
container.registerSingleton<UserService>('UserService', UserService)
container.registerSingleton<RouterInterface>('GymRouter', GymRouter)
container.registerSingleton<EnvConfig>('EnvConfig', EnvConfig)
container.registerSingleton<RouterInterface>('Router', Router)
container.registerSingleton<AuthenticateController>(
  'AuthenticateController',
  AuthenticateController,
)
container.registerSingleton<CheckInsRepository>(
  'CheckInsRepository',
  CheckInsRepository,
)
container.registerSingleton<FetchUserCheckInsHistoryService>(
  'FetchUserCheckInsHistoryService',
  FetchUserCheckInsHistoryService,
)
container.registerSingleton<ProfileController>(
  'ProfileController',
  ProfileController,
)
container.registerSingleton<CheckInController>(
  'CheckInController',
  CheckInController,
)
container.registerSingleton<RefreshController>(
  'RefreshController',
  RefreshController,
)
container.registerSingleton<AuthenticateService>(
  'AuthenticateService',
  AuthenticateService,
)
container.registerSingleton<UserProfileService>(
  'UserProfileService',
  UserProfileService,
)
container.registerSingleton<GetUserMetricsService>(
  'GetUserMetricsService',
  GetUserMetricsService,
)
container.registerSingleton<SearchGymsService>(
  'SearchGymsService',
  SearchGymsService,
)
container.registerSingleton<FetchNearbyGymsService>(
  'FetchNearbyGymsService',
  FetchNearbyGymsService,
)
container.registerSingleton<ValidateCheckInService>(
  'ValidateCheckInService',
  ValidateCheckInService,
)
container.registerSingleton<InMemoryUsersRepository>(
  'InMemoryUsersRepository',
  InMemoryUsersRepository,
)

container.register('CheckInService', { useFactory: makeCheckInServiceFactory })
container.register('FetchUserCheckInsHistoryService', {
  useFactory: makeFetchUserCheckInsHistoryServiceFactory,
})
container.register('FetchNearbyGymsService', {
  useFactory: makeFetchNearbyGymsServiceFactory,
})
container.register('ValidateCheckInService', {
  useFactory: makeValidateCheckInServiceFactory,
})
container.register('UserProfileService', {
  useFactory: makeGetUserProfileServiceFactory,
})
container.register('GetUserMetricsService', {
  useFactory: makeGetUserMetricsServiceFactory,
})
container.register('AuthenticateService', {
  useFactory: makeAuthenticateServiceFactory,
})
container.register('SearchGymsService', {
  useFactory: makeSearchGymsServiceFactory,
})
container.register('UserService', {
  useFactory: makeUserServiceFactory,
})
container.register('GymService', {
  useFactory: makeGymServiceFactory,
})
