import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1727297908951 implements MigrationInterface {
    name = 'CreateTable1727297908951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "post" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                "content" varchar NOT NULL,
                "userId" integer
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_post" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                "content" varchar NOT NULL,
                "userId" integer,
                CONSTRAINT "FK_5c1cf55c308037b5aca1038a131" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_post"("id", "title", "content", "userId")
            SELECT "id",
                "title",
                "content",
                "userId"
            FROM "post"
        `);
        await queryRunner.query(`
            DROP TABLE "post"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_post"
                RENAME TO "post"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "post"
                RENAME TO "temporary_post"
        `);
        await queryRunner.query(`
            CREATE TABLE "post" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar NOT NULL,
                "content" varchar NOT NULL,
                "userId" integer
            )
        `);
        await queryRunner.query(`
            INSERT INTO "post"("id", "title", "content", "userId")
            SELECT "id",
                "title",
                "content",
                "userId"
            FROM "temporary_post"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_post"
        `);
        await queryRunner.query(`
            DROP TABLE "post"
        `);
    }

}
