import { Knex } from 'knex'

declare module 'knex/types/table' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: Date
      session_id?: string
    }
  }
}
