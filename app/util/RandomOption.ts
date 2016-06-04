/**
 * Created by fabiopigna on 04/06/2016.
 */
export class RandomOption {
    private _base:number;
    private _delta:number;

    constructor(base:number, delta:number) {
        this._base = base;
        this._delta = delta;
    }


    get base():number {
        return this._base;
    }

    get delta():number {
        return this._delta;
    }

    getRandom():number {
        var min = this._base - this._delta;
        var range = this._delta * 2;
        return min + Math.random() * range
    }

}