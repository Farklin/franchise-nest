import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1737181648299 implements MigrationInterface {
    name = 'AutoMigration1737181648299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_a4f61b5f2754c6d5fc543df839\` ON \`user\` (\`email\`, \`login\`, \`phone\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_a4f61b5f2754c6d5fc543df839\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`phone\``);
    }

}
