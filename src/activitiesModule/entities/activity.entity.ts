import { Transform } from "class-transformer";
import moment from "moment";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

   // @Transform(startDate => moment(startDate).format("DD/MM/YYYY"))
    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    priceList: number;

    @Column()
    payment: string;

}