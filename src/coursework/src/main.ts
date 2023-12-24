import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'process';

const port = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => console.info(`Server started on 127.0.0.1:${port}`));
}
bootstrap();
