import typeorm from 'typeorm'
import { DataSource } from 'typeorm'
import { User } from './UserEntity'
import { Post } from './PostEntity'

export const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: false,
    logging: false,
    entities: [User, Post],
    migrations: ["./migration/*.ts"],
})