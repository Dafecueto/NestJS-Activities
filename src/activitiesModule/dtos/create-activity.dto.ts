import { Type } from "class-transformer";
import { IsDate, IsInt, IsNumber, isNumber, isString, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateActivityDto {

    @IsInt()
    readonly id: number;

    @MinLength(2)
    @MaxLength(50)
    @IsString()
    readonly name: string;

    @Type(() => Date)
    @IsDate()
    readonly startDate: Date;

    @Type(() => Date)
    @IsDate()
    readonly endDate: Date;

    @IsNumber()
    readonly priceList: number;

    @IsString()
    readonly payment: string;




   
 
}