import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';
import { join } from 'path';
import { User } from '../user/entities/user.entity';

dotenv.config({ path: join(__dirname, '../../.env') });

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User],
  migrations: ['src/migrations/*{.ts,.js}'],
  synchronize: false,
});

export default dataSource;
module.exports = dataSource;