import {Delta} from "./Delta";
export class Point {

    private _x:number;
    private _y:number;


    constructor(x:number, y:number) {
        this._x = x;
        this._y = y;
    }


    get x():number {
        return this._x;
    }

    get y():number {
        return this._y;
    }


    set x(value:number) {
        this._x = value;
    }

    set y(value:number) {
        this._y = value;
    }

    moveBy(delta:Delta):Point {
        this.x += delta.x;
        this.y += delta.y;
        return this;
    }

    copy():Point {
        return new Point(this.x, this.y);
    }
}
