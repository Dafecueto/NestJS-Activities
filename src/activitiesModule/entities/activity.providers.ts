import { Connection } from "typeorm";
import { Activity } from "./activity.entity";

export const activityProviders = [
    {
        provide: 'ActivityRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Activity),
        inject: ['DbConnectionToken']
    }
]