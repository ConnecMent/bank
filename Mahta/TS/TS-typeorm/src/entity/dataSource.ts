  import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    fName: string;

    @Column()
    lName: string;

    @Column()
    age: number;

    constructor() {
      this.fName = "";
      this.lName = "";
      this.age = 0;
    }
  }
