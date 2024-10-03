import typeorm from 'typeorm'
import { DataSource } from 'typeorm'
import { User } from './entity2'

export const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database_sqlite',
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ["./migration/*.ts"],
})