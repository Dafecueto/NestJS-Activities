import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/databaseModule/database.module";
import { ActivitiesController } from "./activities.controller";
import { ActivitiesService } from "./activities.service";
import { activityProviders } from "./entities/activity.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [ActivitiesController],
    providers: [ActivitiesService, ...activityProviders]
})
export class ActivitiesModule {}