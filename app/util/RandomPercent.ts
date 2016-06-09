import {Percent} from "./Percent";
/**
 * Created by fabiopigna on 04/06/2016.
 */
export class RandomPercent {
    private _base:number;
    private _deltaPercent:Percent;

    constructor(base:number, deltaPercent:Percent) {
        this._base = base;
        this._deltaPercent = deltaPercent;
    }


    getRandom():number {
        var min = this._base * (1.0 - this._deltaPercent.get());
        var range = this._base * this._deltaPercent.get() * 2;
        return min + Math.random() * range
    }

    getRandomRound():number {
        return Math.round(this.getRandom());
    }

}