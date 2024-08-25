import typeorm from 'typeorm'
import { DataSource } from 'typeorm'
import { User } from './entity'

export const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ["./migration/*.ts"],
})

