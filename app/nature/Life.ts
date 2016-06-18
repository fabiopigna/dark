import {Percent} from "../util/Percent";
import {RandomPercent} from "../util/RandomPercent";
import {ILife} from "./ILife";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Life implements ILife{
    private lifeStartTime:number;
    private lifeGrowTime:number;
    private lifeNormalized:number;
    private lifeTime:number;
    private timeToDie:number;
    private death:boolean;
    private changed:boolean;

    constructor(timeToGrow:number, percent:Percent, timeToDie:number = timeToGrow) {
        this.timeToDie = timeToDie;
        this.lifeGrowTime = new RandomPercent(timeToGrow, percent).getRandom();
        this.lifeNormalized = 0;
        this.death = false;
        this.changed = false;
    }

    update(elapsed:number):void {
        this.changed = false;
        this.lifeStartTime = this.lifeStartTime ? this.lifeStartTime : elapsed;
        this.lifeTime = (elapsed - this.lifeStartTime);
        var currentLifeStep = Math.min(this.lifeTime / this.lifeGrowTime, 1.0);
        if (this.lifeNormalized < currentLifeStep) {
            this.lifeNormalized = currentLifeStep;
            this.changed = true;
        }
    }

    isChanged():boolean {
        return this.changed;
    }

    isGrowing():boolean {
        return this.lifeNormalized < 1.0;
    }

    normalized():number {
        return this.lifeNormalized;
    }

    isDead():boolean {
        return this.death || this.lifeTime > this.timeToDie;
    }

    die():number {
        var value = this.lifeNormalized;
        this.death = true;
        this.changed = true;
        return value;
    }
}