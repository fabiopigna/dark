/**
 * Created by fabiopigna on 04/06/2016.
 */
export class RandomPercent {
    private _base:number;
    private _deltaPercent:number;

    constructor(base:number, deltaPercent:number) {
        this._base = base;
        this._deltaPercent = deltaPercent;
    }


    getRandom():number {
        var min = this._base * (1.0 - this._deltaPercent);
        var range = this._base * this._deltaPercent * 2;
        return min + Math.random() * range
    }

    getRandomRound():number {
        return Math.round(this.getRandom());
    }

}