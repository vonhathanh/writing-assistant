import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log(`Application running at port: ${process.env.PORT}, ${process.env.NODE_ENV} mode`);
}
bootstrap();
