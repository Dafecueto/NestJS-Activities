import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Activity } from "src/activitiesModule/models/activity.interface";
import { Repository } from "typeorm";
import { CreateActivityDto } from "./dtos/create-activity.dto";

@Injectable()
export class ActivitiesService {
    constructor(
        @Inject('ActivityRepositoryToken')
        private readonly activityRepository: Repository<Activity>
    ) {
        this.fake_activities.forEach(activity =>
            activityRepository.insert(activity).catch(() => {}))
    
    }

    private readonly fake_activities: Activity[] = [
        {
            id: 1,
            name: "Running",
            startDate: new Date(),
            endDate: new Date(),
            priceList: 3,
            payment: "Paypal"
        },
        {
            id: 2,
            name: "Photography",
            startDate: new Date(),
            endDate: new Date(),
            priceList: 3, 
            payment: "Credit Card"
        }
    ]

    findAll(): Promise<Activity[]> {
        return this.activityRepository.find();
    }

    async findById(activityID: number): Promise<Activity> {
        const activity = await this.activityRepository.findOne(activityID);
        if (!activity) {
            throw new NotFoundException();
        }
        return activity;
    }

    async findByName(_name:string): Promise<Activity[]> {
        const activity = await this.activityRepository.find({where: {name: _name}});
        if (!activity) {
            throw new NotFoundException();
        }
        return activity;
    }

    async insertActivity({name, startDate, endDate, priceList, payment}: CreateActivityDto): Promise<Activity[]> {
        await this.activityRepository.insert({name, startDate, endDate, priceList, payment});
        return this.findByName(name);
    }




}