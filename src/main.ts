import { NestFactory } from '@nestjs/core';
 import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   const options = new DocumentBuilder()
   .setTitle('Smart Conseil  Technical Test')
    .setDescription('Feel Free To Test Any API')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local environment')
    .addTag('/')
    .build();

const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
 await app.listen(process.env.PORT || 3000);
 }
bootstrap();
