import { container } from 'tsyringe'
import { EnvConfig, FastifyConfig, PrismaConfig } from './configs'
import { Router as RouterInterface } from '@/interfaces'
import { Router } from './routes/router'
import {
  AuthenticateController,
  ProfileController,
  UserController,
} from './controllers'
import { MainRouter } from './routes/main.router'
import { UserRouter } from './routes/user.router'
import { CheckSessionMiddleware, AuthMiddleware } from './middlewares'
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

container.registerSingleton<UserController>('UserController', UserController)
container.registerSingleton<AuthMiddleware>('AuthMiddleware', AuthMiddleware)
container.registerSingleton<UserRepository>('UserRepository', UserRepository)
container.registerSingleton<FastifyConfig>('FastifyConfig', FastifyConfig)
container.registerSingleton<GymRepository>('GymRepository', GymRepository)
container.registerSingleton<PrismaConfig>('PrismaConfig', PrismaConfig)
container.registerSingleton<RouterInterface>('MainRouter', MainRouter)
container.registerSingleton<RouterInterface>('UserRouter', UserRouter)
container.registerSingleton<UserService>('UserService', UserService)
container.registerSingleton<EnvConfig>('EnvConfig', EnvConfig)
container.registerSingleton<RouterInterface>('Router', Router)
container.registerSingleton<AuthenticateController>(
  'AuthenticateController',
  AuthenticateController,
)

container.registerSingleton<CheckSessionMiddleware>(
  'CheckSessionMiddleware',
  CheckSessionMiddleware,
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
container.register('UserProfileService', {
  useFactory: makeGetUserProfileServiceFactory,
})
container.register('AuthenticateService', {
  useFactory: makeAuthenticateServiceFactory,
})
container.register('FetchNearbyGymsService', {
  useFactory: makeFetchNearbyGymsServiceFactory,
})
container.register('FetchUserCheckInsHistoryService', {
  useFactory: makeFetchUserCheckInsHistoryServiceFactory,
})
container.register('GetUserMetricsService', {
  useFactory: makeGetUserMetricsServiceFactory,
})
container.register('GymService', {
  useFactory: makeGymServiceFactory,
})
container.register('SearchGymsService', {
  useFactory: makeSearchGymsServiceFactory,
})
container.register('UserService', {
  useFactory: makeUserServiceFactory,
})
container.register('ValidateCheckInService', {
  useFactory: makeValidateCheckInServiceFactory,
})
