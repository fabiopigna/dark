import {Point} from "./Point";
import {ISnapBounds} from "../nature/interface/ISnapBounds";
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class CircleBounds implements ISnapBounds {

    private _center:Point;
    private _radius:number;


    constructor(center:Point, radius:number) {
        this._center = center;
        this._radius = radius;
    }

    toSnap():{} {
        return {cx: this._center.x, cy: this._center.y, r: this._radius};
    }

    get cx():number {
        return this._center.x;
    }

    get cy():number {
        return this._center.y;
    }

    get r():number {
        return this._radius;
    }
}