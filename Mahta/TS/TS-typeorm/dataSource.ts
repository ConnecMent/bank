import * as typo from "typeorm";
import "reflect-metadata";

@typo.Entity()
export class User {
  @typo.PrimaryGeneratedColumn()
  id: number;

  @typo.Column()
  fName: string;

  @typo.Column()
  lName: string;

  @typo.Column()
  age: number;

  constructor() {
    this.id = 0; // Default value, will be overwritten by database
    this.fName = "";
    this.lName = "";
    this.age = 0;
  }
}

