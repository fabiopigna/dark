import {ILife} from "../../ILife";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class ConsumerLife implements ILife {

    private toConsume:number;
    private fullValue:number = 100;
    private startTime:number;
    private velocity:number = this.fullValue / 30000;
    private changed:boolean;

    constructor() {
        this.toConsume = this.fullValue;
        this.changed = false;
    }

    normalized():number {
        return Math.min(this.toConsume, this.fullValue) / this.fullValue;
    }

    live(elapsed:number):void {
        this.startTime = this.startTime ? this.startTime : elapsed;
        let deltaTime = (elapsed - this.startTime);
        let consumeDelta = Math.min(deltaTime * this.velocity, this.toConsume);
        this.toConsume -= consumeDelta;
        this.changed = this.toConsume < this.fullValue;
        this.startTime = elapsed;

    }

    needToConsume():boolean {
        return this.toConsume < this.fullValue;
    }

    die():number {
        return 0;
    }

    isChanged():boolean {
        return this.changed;
    }

    isDead():boolean {
        return false;
    }
}