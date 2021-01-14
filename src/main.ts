import { NestFactory } from '@nestjs/core';
import { ActivitiesModule } from './activitiesModule/activities.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ActivitiesModule);
  await app.listen(3000);
}
bootstrap();
