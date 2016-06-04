import {Point} from "./Point";
import {PathBounds} from "./PathBounds";
import {ISnapBounds} from "../nature/interface/ISnapBounds";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class LineBounds implements ISnapBounds {
    private firstPoint:Point;
    private secondPoint:Point;

    constructor(firstPoint:Point, secondPoint:Point) {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;

    }

    getRandomPoint():Point {
        var m = (this.secondPoint.y - this.firstPoint.y) / (this.secondPoint.x - this.firstPoint.x);
        var deltaX = this.secondPoint.x - this.firstPoint.x;
        var deltaXRandom = Math.random() * deltaX;
        var x = this.firstPoint.x + deltaXRandom;
        var y = this.firstPoint.y + m * deltaXRandom;
        return new Point(x, y);
    }

    toSnap():{} {
        var path = 'M ' + this.firstPoint.x + ' ' + this.firstPoint.y;
        path += ' L ' + this.secondPoint.x + ' ' + this.secondPoint.y;
        return {d: path};
    }
}