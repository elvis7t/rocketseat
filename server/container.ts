import { container } from 'tsyringe'
import { EnvConfig, FastifyConfig, SqliteConfig } from './configs'
import { Router as RouterInterface } from '@/interfaces'
import { Router } from '@/routes/router'
import { MainController } from './controllers/main.controller'
import { MainRouter } from '@/routes/main.router'

container.registerSingleton<EnvConfig>('EnvConfig', EnvConfig)
container.registerSingleton<FastifyConfig>('FastifyConfig', FastifyConfig)
container.registerSingleton<RouterInterface>('Router', Router)
container.registerSingleton<RouterInterface>('MainRouter', MainRouter)
container.registerSingleton<MainController>('MainController', MainController)
container.registerSingleton<SqliteConfig>('SqliteConfig', SqliteConfig)
