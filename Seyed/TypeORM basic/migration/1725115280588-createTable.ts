import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1725115280588 implements MigrationInterface {
    name = 'CreateTable1725115280588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "fName" varchar NOT NULL,
                "lName" varchar NOT NULL,
                "age" integer NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
