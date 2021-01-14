import { Inject, Injectable } from "@nestjs/common";
import { Activity } from "src/activitiesModule/models/activity.interface";
import { Repository } from "typeorm";

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
            priceList: [10, 20, 30],
            payment: "Paypal"
        },
        {
            id: 2,
            name: "Photography",
            startDate: new Date(),
            endDate: new Date(),
            priceList: [15, 22, 33],
            payment: "Credit Card"
        }
    ]

    findAll(): Activity[] {
        return this.fake_activities;
    }


}