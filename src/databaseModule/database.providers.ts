import { createConnection } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () =>
            await createConnection({
                type: 'postgres',
                host: "146.59.155.170",
                port: 8085,
                username: "postgres",
                password: "example",
                database: "actividades",
                entities: [__dirname + '/../**/*entity.ts'],
                synchronize: true,
                logging: true
            })
    }
]