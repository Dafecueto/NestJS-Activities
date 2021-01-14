export interface Activity {
    id : number,
    name : string,
    startDate : Date,
    endDate : Date,
    priceList : Array<number>,
    payment : string
}