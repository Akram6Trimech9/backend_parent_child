import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { User } from './user/user.entity';
import { Social } from './user/social.entity';
import { UserModule } from './user/user.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
@Module({
  imports: [
        TypeOrmModule.forRoot({ ...typeOrmConfig, entities: [User ,Social] }),
        UserModule,
    //      ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'uploads'),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
