// typeorm.config.ts
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'smartconseil',
    synchronize: true,
     migrationsRun: true,
};
