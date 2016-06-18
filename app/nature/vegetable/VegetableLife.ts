import {Percent} from "../../util/Percent";
import {RandomPercent} from "../../util/RandomPercent";
import {RainStatus} from "./life/RainingStatus";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class VegetableLife {
    private lifeNormalized:number;
    private death:boolean;
    private changed:boolean;
    private timeToGrow:number;
    private velocity:number;
    private status:RainStatus;
    private startRainingTime:number;

    constructor(timeToGrowBase:number, timeToGrowPercent:Percent) {
        this.timeToGrow = new RandomPercent(timeToGrowBase, timeToGrowPercent).getRandom();
        this.velocity = 1.0 / this.timeToGrow;
        this.status = new RainStatus();
        this.changed = false;
        this.lifeNormalized = 0;
    }

    grow(elapsed:number, raining:boolean):boolean {
        this.status.update(raining);
        if (this.status.isStartRaining()) {
            this.startRainingTime = elapsed;
            this.changed = true;
        } else if (this.status.isStillRaining()) {
            let rainingTime = (elapsed - this.startRainingTime);
            let growDelta = rainingTime * this.velocity;
            this.lifeNormalized = Math.min(this.lifeNormalized + growDelta, 1.0);
            this.startRainingTime = elapsed;
            this.changed = true;
        } else if (this.status.isStopRaining()) {
            this.changed = true;
        } else if (this.status.isStillNotRaining()) {
            this.changed = false;
        }
       
        return this.changed;
    }

    isChanged():boolean {
        return this.changed
    }

    normalized():number {
        return this.lifeNormalized;
    }

    isDead():boolean {
        return this.death;
    }

    die():number {
        var value = this.lifeNormalized;
        this.death = true;
        this.changed = true;
        return value;
    }
}

