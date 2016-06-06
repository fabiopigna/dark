import {CurveBounds} from "./CurveBounds";
import {Point} from "./Point";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export class StrawberryBounds extends CurveBounds {

    private origin:Point;
    private bottomLeft:Point;
    private topLeft:Point;
    private topRight:Point;
    private bottomRight:Point;

    constructor(origin:Point) {
        var width = 30;
        var height = 15;
        var bottomLeft = new Point(12, 0);
        var topLeft = new Point(0, -height);
        var topRight = new Point(width, -height);
        var bottomRight = new Point(width - 12, 0);
        super([bottomLeft, topLeft, topRight, bottomRight]);
        this.bottomLeft = bottomLeft;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomRight = bottomRight;
        this.origin = origin;
    }

    update(lifeNormalized:number) {

    }

    getOrigin():Point {
        return this.origin;
    }
}