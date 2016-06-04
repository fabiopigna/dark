/**
 * Created by fabiopigna on 02/06/2016.
 */
export class RangedValue {
    private minValue:number;
    private maxValue:number;

    constructor(minValue:number, maxValue:number) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    get(percent:number):number {
        return this.minValue + percent * (this.maxValue - this.minValue);
    }
}