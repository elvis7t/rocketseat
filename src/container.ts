import { container } from 'tsyringe'
import { EnvConfig, FastifyConfig, SqliteConfig } from './configs'
import { Router as RouterInterface } from '@/interfaces'
import { Router } from './routes/router'
import { MainController, UserController } from './controllers'
import { MainRouter } from './routes/main.router'
import { UserRouter } from './routes/user.router'
import { CheckSessionMiddleware, AuthMiddleware } from './middlewares'
import { UserRepository } from './repository'
import { UserService } from './services'

container.registerSingleton<EnvConfig>('EnvConfig', EnvConfig)
container.registerSingleton<FastifyConfig>('FastifyConfig', FastifyConfig)
container.registerSingleton<RouterInterface>('Router', Router)
container.registerSingleton<RouterInterface>('MainRouter', MainRouter)
container.registerSingleton<RouterInterface>('UserRouter', UserRouter)
container.registerSingleton<MainController>('MainController', MainController)
container.registerSingleton<UserController>('UserController', UserController)
container.registerSingleton<SqliteConfig>('SqliteConfig', SqliteConfig)
container.registerSingleton<CheckSessionMiddleware>(
  'CheckSessionMiddleware',
  CheckSessionMiddleware,
)
container.registerSingleton<AuthMiddleware>('AuthMiddleware', AuthMiddleware)
container.registerSingleton<UserRepository>('UserRepository', UserRepository)
container.registerSingleton<UserService>('UserService', UserService)
