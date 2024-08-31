import typeorm from 'typeorm'
import { DataSource } from 'typeorm'
import { User } from './entity'

export const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ["./migration/*.ts"],
})

