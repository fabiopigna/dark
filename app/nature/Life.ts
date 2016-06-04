/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Life {
    private life:number;
    private lifeStartTime:number;
    private lifeGrowTime:number;
    private lifeNormalized:number;
    private lifeMaxTimer:number;
    private lifeTime:number;

    constructor(lifeGrowTime:number, lifeMaxTimer?:number) {
        this.lifeMaxTimer = lifeMaxTimer;
        this.life = 0;
        this.lifeNormalized = 0;
        this.lifeGrowTime = lifeGrowTime;
    }

    update(elapsed:number) {
        this.lifeStartTime = this.lifeStartTime ? this.lifeStartTime : elapsed;
        this.lifeTime = (elapsed - this.lifeStartTime) / this.lifeGrowTime;
        var currentLifeStep = Math.min(this.lifeTime, this.lifeGrowTime);
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
}