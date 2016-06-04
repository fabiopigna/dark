import {Point} from "./Point";
import {ISnapBounds} from "../nature/interface/ISnapBounds";
import {RandomOption} from "../util/RandomOption";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class LineBounds implements ISnapBounds {
    private _firstPoint:Point;
    private _secondPoint:Point;

    constructor(firstPoint:Point, secondPoint:Point) {
        this._firstPoint = firstPoint;
        this._secondPoint = secondPoint;

    }

    getCenter():Point {
        return new Point(0.5 * (this._secondPoint.x + this._firstPoint.x), 0.5 * (this._secondPoint.y + this._firstPoint.y));
    }

    getLength():number {
        var x2 = Math.pow(this._secondPoint.x - this._firstPoint.x, 2);
        var y2 = Math.pow(this._secondPoint.y - this._firstPoint.y, 2);
        return Math.sqrt(x2 + y2);
    }

    get firstPoint():Point {
        return this._firstPoint;
    }

    get secondPoint():Point {
        return this._secondPoint;
    }

    getRandomPoint(randomOption?:RandomOption):Point {
        var random = randomOption ? randomOption.getRandom() : Math.random();
        var m = (this._secondPoint.y - this._firstPoint.y) / (this._secondPoint.x - this._firstPoint.x);
        if (m === Infinity) {
            var y = this._firstPoint.y + (this._secondPoint.y - this._firstPoint.y) * random;
            return new Point(this._firstPoint.x, y);
        }
        var deltaX = this._secondPoint.x - this._firstPoint.x;

        var deltaXRandom = random * deltaX;
        var x = this._firstPoint.x + deltaXRandom;
        var y = this._firstPoint.y + m * deltaXRandom;
        return new Point(x, y);
    }


    toSnap():{} {
        var path = 'M ' + this._firstPoint.x + ' ' + this._firstPoint.y;
        path += ' L ' + this._secondPoint.x + ' ' + this._secondPoint.y;
        return {d: path};
    }
}