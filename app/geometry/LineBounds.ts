import {Point} from "./Point";
import {ISnapBounds} from "../nature/interface/ISnapBounds";
import {RandomOption} from "../util/RandomOption";
import {Size} from "./Size";
import {Delta} from "./Delta";
import Vector = SAT.Vector;
import Polygon = SAT.Polygon;
import {ICollidableBounds} from "../util/ICollidableBounds";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class LineBounds implements ISnapBounds,ICollidableBounds {
    private _firstPoint:Point;
    private _secondPoint:Point;
    private originSAT:Vector;
    private boundsSAT:Polygon;

    constructor(firstPoint:Point, secondPoint:Point) {
        this._firstPoint = firstPoint;
        this._secondPoint = secondPoint;
        this.originSAT = new Vector(this._firstPoint.x, this._firstPoint.y);
        this.boundsSAT = new Polygon(this.originSAT, [new Vector(0, 0), new Vector(secondPoint.x - firstPoint.x, secondPoint.y - firstPoint.y)]);
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

    translate(delta:Delta):LineBounds {
        return new LineBounds(this.firstPoint.copy().moveBy(delta), this.secondPoint.copy().moveBy(delta));
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

    getRandomPoints(n:number):Point[] {
        var points:Point[] = [];
        for (var i = 0; i < n; i++) {
            points.push(this.getRandomPoint());
        }
        return points;
    }

    toSnapString():string {
        var path = 'M ' + this._firstPoint.x + ' ' + this._firstPoint.y;
        path += ' L ' + this._secondPoint.x + ' ' + this._secondPoint.y;
        return path;
    }


    getCollidableBounds():SAT.Polygon {
        return this.boundsSAT;
    }

    toSnap():{} {
        return {d: this.toSnapString()};
    }


}