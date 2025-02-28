import { knex, Knex } from 'knex'

const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './db/db.sqlite',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

// const database = knex(config)

// export default database
// export const database = knex(config)
export default config
