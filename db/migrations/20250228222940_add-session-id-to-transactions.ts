import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('transactions', (table) => {
    table.uuid('session_id').after('id').index('idx_session_id')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('transactions', (table) => {
    table.dropColumn('session_id')
  })
}
