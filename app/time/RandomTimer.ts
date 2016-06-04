/**
 * Created by fabiopigna on 03/06/2016.
 */
export class RandomTimer {
    private minTime:number;
    private rangeTime:number;
    private timeToWait:number;

    constructor(minTime:number, rangeTime:number) {
        this.minTime = minTime;
        this.rangeTime = rangeTime;
        this.timeToWait = minTime + Math.random() * rangeTime;


    }

    itsTimeTo(elapsed:number):boolean {
        if (elapsed > this.timeToWait) {
            this.timeToWait += this.minTime + Math.random() * this.rangeTime;
            return true;
        }
        return false;
    }
}