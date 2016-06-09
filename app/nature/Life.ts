import {Percent} from "../util/Percent";
import {RandomPercent} from "../util/RandomPercent";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Life {
    private lifeStartTime:number;
    private lifeGrowTime:number;
    private lifeNormalized:number;
    private lifeTime:number;
    private timeToDie:number;

    constructor(timeToGrow:number, percent:Percent, timeToDie:number = timeToGrow) {
        this.timeToDie = timeToDie;
        this.lifeGrowTime = new RandomPercent(timeToGrow, percent).getRandom();
        this.lifeNormalized = 0;
    }

    update(elapsed:number) {
        this.lifeStartTime = this.lifeStartTime ? this.lifeStartTime : elapsed;
        this.lifeTime = (elapsed - this.lifeStartTime);
        var currentLifeStep = Math.min(this.lifeTime / this.lifeGrowTime, this.lifeGrowTime);
        if (this.lifeNormalized < currentLifeStep) {
            this.lifeNormalized = currentLifeStep;
        }
    }

    isGrowing():boolean {
        return this.lifeNormalized < 1.0;
    }

    normalized():number {
        return this.lifeNormalized;
    }

    isDead():boolean {
        return this.lifeTime > this.timeToDie;
    }
}