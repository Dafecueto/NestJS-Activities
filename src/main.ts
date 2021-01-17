import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ActivitiesModule } from './activitiesModule/activities.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ActivitiesModule);
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(3000);
}
bootstrap();
