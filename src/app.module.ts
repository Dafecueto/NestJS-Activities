import * as cors from 'cors';

import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { ActivitiesModule } from './activitiesModule/activities.module';

const routes = {
  ALL: {
    path: '*',
    method: RequestMethod.ALL,
  },
  ONLY_GET: {
    path: '*',
    method: RequestMethod.GET,
  },
};
@Module({
  imports: [ActivitiesModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors())
      .forRoutes(routes.ALL)
  }
}