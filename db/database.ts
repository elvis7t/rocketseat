import { Knex, knex as setUpKnex } from 'knex'
import { env } from '../src/env'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}
export const knex = setUpKnex(config)
