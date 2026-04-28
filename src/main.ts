import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { Environment } from './enum';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // UI available at /api
  await app.listen(process.env.PORT);
  console.log(
    `Application running at port: ${process.env.PORT}`,
    `Mode: ${process.env.NODE_ENV}`,
    `Auto sync db: ${process.env.NODE_ENV == Environment.DEV}`,
  );
}
bootstrap();
