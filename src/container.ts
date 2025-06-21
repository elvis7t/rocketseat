import { container } from 'tsyringe'
import { EnvConfig, FastifyConfig, SqliteConfig, PrismaConfig } from './configs'
import { Router as RouterInterface } from '@/interfaces'
import { Router } from './routes/router'
import {
  MainController,
  UserController,
  AuthenticateController,
} from './controllers'
import { MainRouter } from './routes/main.router'
import { UserRouter } from './routes/user.router'
import { CheckSessionMiddleware, AuthMiddleware } from './middlewares'
import { UserRepository } from './repository'
import {
  UserService,
  AuthenticateService,
  UserProfileService,
  CheckinService,
} from './services'
import { InMemoryUsersRepository } from './repository/in-memory-repository'

container.registerSingleton<EnvConfig>('EnvConfig', EnvConfig)
container.registerSingleton<FastifyConfig>('FastifyConfig', FastifyConfig)
container.registerSingleton<RouterInterface>('Router', Router)
container.registerSingleton<RouterInterface>('MainRouter', MainRouter)
container.registerSingleton<RouterInterface>('UserRouter', UserRouter)
container.registerSingleton<MainController>('MainController', MainController)
container.registerSingleton<AuthenticateController>(
  'AuthenticateController',
  AuthenticateController,
)
container.registerSingleton<UserController>('UserController', UserController)
container.registerSingleton<SqliteConfig>('SqliteConfig', SqliteConfig)
container.registerSingleton<PrismaConfig>('PrismaConfig', PrismaConfig)
container.registerSingleton<CheckSessionMiddleware>(
  'CheckSessionMiddleware',
  CheckSessionMiddleware,
)
container.registerSingleton<AuthMiddleware>('AuthMiddleware', AuthMiddleware)
container.registerSingleton<UserRepository>('UserRepository', UserRepository)
container.registerSingleton<UserService>('UserService', UserService)
container.registerSingleton<AuthenticateService>(
  'AuthenticateService',
  AuthenticateService,
)
container.registerSingleton<UserProfileService>(
  'UserProfileService',
  UserProfileService,
)
container.registerSingleton<CheckinService>('CheckinService', CheckinService)
container.registerSingleton<InMemoryUsersRepository>(
  'InMemoryUsersRepository',
  InMemoryUsersRepository,
)
