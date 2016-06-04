/**
 * Created by fabiopigna on 02/06/2016.
 */
export class RangedValue {
    private minValue:number;
    private maxValue:number;
    private padding:number;

    constructor(minValue:number, maxValue:number, padding:number) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.padding = padding;
    }

    get(percent:number):number {
        return this.padding + this.minValue + percent * (this.maxValue - this.minValue);
    }
}