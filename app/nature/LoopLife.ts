/**
 * Created by fabiopigna on 03/06/2016.
 */
export class LoopLife {
    private life:number;
    private lifeStartTime:number;
    private lifeGrowTime:number;
    private lifeNormalized:number;
    private lifeTime:number;

    constructor(lifeGrowTime:number) {
        this.life = 0;
        this.lifeNormalized = 0;
        this.lifeGrowTime = lifeGrowTime;
    }

    update(elapsed:number) {
        this.lifeStartTime = this.lifeStartTime ? this.lifeStartTime : elapsed;
        this.lifeTime = ((elapsed - this.lifeStartTime) % this.lifeGrowTime) / this.lifeGrowTime;
        this.lifeNormalized = this.lifeTime;
    }

    isGrowing():boolean {
        return true;
    }

    normalized():number {
        return this.lifeNormalized;
    }
}