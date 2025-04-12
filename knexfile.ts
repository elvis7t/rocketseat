import 'reflect-metadata'
import { container } from 'tsyringe'
import { EnvConfig, SqliteConfig } from '@/configs'

container.register('EnvConfig', {
  useClass: EnvConfig,
})

const sqliteConfig = container.resolve(SqliteConfig)

export default {
  development: sqliteConfig.getConnection().client.config,
  test: sqliteConfig.getConnection().client.config,
}
