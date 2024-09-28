import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Post } from "./PostEntity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    fName!: string
    
    @Column()
    lName!: string
    
    @Column()
    age!: number

    @OneToMany(() => Post, post => post.user, { cascade: true })
    post!: Post[]
}