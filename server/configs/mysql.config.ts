import { injectable, inject } from 'tsyringe'
import { Knex } from 'knex'
import knex from 'knex'
import { EnvConfig } from '@/configs/env.config'

@injectable()
export class MysqlConfig {
    private knexInstance: Knex

    constructor(@inject('EnvConfig') private readonly env: EnvConfig) {
        this.knexInstance = knex({
            client: env.DATABASE_CLIENT,
            connection: {
                host: this.env.DB_HOST,
                user: this.env.DB_USER,
                password: this.env.DB_PASSWORD,
                database: this.env.DB_NAME,
                port: this.env.DB_PORT,
            },
            pool: { min: 0, max: 10 },
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