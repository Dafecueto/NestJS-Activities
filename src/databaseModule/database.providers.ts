import { createConnection } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () =>
            await createConnection({
                type: 'postgres',
                host: "146.59.155.170",
                port: 5433,
                username: "test",
                password: "test",
                database: "actividades",
                entities: [__dirname + '/../**/*entity.{ts,js}'],
                synchronize: true,
                logging: true
            })
    }
]