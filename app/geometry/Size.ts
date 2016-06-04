/**
 * Created by fabiopigna on 02/06/2016.
 */
export class Size {
    private _width:number;
    private _height:number;

    constructor(width:number, height:number) {
        this._width = width;
        this._height = height;
    }

    toJson():{} {
        return {width: this._width, height: this._height};
    }

    get width():number {
        return this._width;
    }

    get height():number {
        return this._height;
    }

    set width(value:number) {
        this._width = value;
    }

    set height(value:number) {
        this._height = value;
    }
}