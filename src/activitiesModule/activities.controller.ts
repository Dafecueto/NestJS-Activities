import { Controller, Get } from "@nestjs/common";
import { Activity } from "src/activitiesModule/models/activity.interface";
import { ActivitiesService } from "./activities.service";

@Controller('activities')
export class ActivitiesController {
    constructor(private activitiesService : ActivitiesService) {}

    @Get()
    findAll(): Activity[] {
        return this.activitiesService.findAll();
    }
}