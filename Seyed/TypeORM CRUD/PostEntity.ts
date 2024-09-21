import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import { User } from "./UserEntity";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    content!: string

    @ManyToOne(() => User, user => user.post)
    user!: User
}