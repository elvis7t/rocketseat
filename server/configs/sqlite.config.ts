import { injectable, inject } from 'tsyringe'
import { Knex } from 'knex'
import knex from 'knex'
import { EnvConfig } from '@/configs/env.config'

@injectable()
export class SqliteConfig {
    private knexInstance: Knex

    constructor(@inject('EnvConfig') private readonly env: EnvConfig) {
        const connectionConfig =
            this.env.DATABASE_CLIENT === 'sqlite3'
                ? { filename: this.env.DATABASE_URL }
                : this.env.DATABASE_URL

        this.knexInstance = knex({
            client: this.env.DATABASE_CLIENT,
            connection: connectionConfig,
            useNullAsDefault: true,
            migrations: {
                extension: 'ts',
                directory: './db/migrations',
            },
        })
    }

    public getConnection(): Knex {
        return this.knexInstance
    }
}