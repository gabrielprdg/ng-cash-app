import { DataSource } from 'typeorm'
import { TypeOrmAccount } from '../entity/typeorm-account'
import { TypeOrmTransaction } from '../entity/typeorm-transaction'
import { TypeOrmUser } from '../entity/typeorm-user'

export class AppDataSource {
    private static instance: DataSource

    static getInstance (): DataSource {
        if (this.instance) return this.instance
        this.instance = new DataSource({
            type: 'postgres',
            host: process.env?.DB_HOST,
            port: Number(process.env?.DB_PORT),
            username: process.env?.DB_USER,
            password: process.env?.DB_PASSWORD,
            database: process.env?.DB_NAME,
            entities: [TypeOrmUser, TypeOrmAccount, TypeOrmTransaction],
            synchronize: false,
            logging: false
        })

        return this.instance
    }
}
