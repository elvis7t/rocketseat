import knex from 'knex'

export const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './db/db.sqlite',
  },
  useNullAsDefault: true,
})
