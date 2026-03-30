import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Environment } from './enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log(
    `Application running at port: ${process.env.PORT}\nMode: ${process.env.NODE_ENV}\nAuto sync db: ${process.env.NODE_ENV == Environment.DEV}`,
  );
}
bootstrap();
