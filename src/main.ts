import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DBConnection } from './connection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  DBConnection();
}
bootstrap();
