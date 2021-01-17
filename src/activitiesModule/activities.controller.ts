import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors, UsePipes } from "@nestjs/common";
import { ActivitiesService } from "./activities.service";
import { CreateActivityDto } from "./dtos/create-activity.dto";
import { Activity } from "./entities/activity.entity";

@Controller('activities')
export class ActivitiesController {
    constructor(private activitiesService : ActivitiesService) {}

    @Get()
    findAll(): Promise<Activity[]> {
        return this.activitiesService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id:string): Promise<Activity> {
        const activityID = parseInt(id);
        return this.activitiesService.findById(activityID);
    }

    @Get('name/:name')
    findByName(@Param('name') name: string): Promise<Activity[]> {
        return this.activitiesService.findByName(name);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    @UsePipes()
    insertActivity(@Body() createActivityDto: CreateActivityDto): Promise<Activity[]> {
        return this.activitiesService.insertActivity(createActivityDto);


    }



    
}