import {Point} from "./Point";
import {ISnapBounds} from "../nature/interface/ISnapBounds";
import {Size} from "./Size";
import {LineBounds} from "./LineBounds";
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class RectangleBounds implements ISnapBounds {

    private origin:Point;
    private size:Size;


    constructor(origin:Point, size:Size) {
        this.origin = origin;
        this.size = size;
    }

    getTopLine():LineBounds {
        var topLeft = new Point(this.origin.x, this.origin.y);
        var topRight = new Point(this.origin.x + this.size.width, this.origin.y);
        return new LineBounds(topLeft, topRight);
    }

    getLeftLine():LineBounds {
        var topLeft = new Point(this.origin.x, this.origin.y);
        var bottomLeft = new Point(this.origin.x, this.origin.y + this.size.height);
        return new LineBounds(topLeft, bottomLeft);
    }

    getBottomLine() {
        var bottomLeft = new Point(this.origin.x, this.size.height + this.origin.y);
        var bottomRight = new Point(this.origin.x + this.size.width, this.size.height + this.origin.y);
        return new LineBounds(bottomLeft, bottomRight);
    }

    getOrigin():Point {
        return this.origin;
    }

    get width():number {
        return this.size.width;
    }

    get height():number {
        return this.size.height;
    }

    right():number {
        return this.origin.x + this.size.width;
    }

    left():number {
        return this.origin.x;
    }

    toSnap():{} {
        return {x: this.origin.x, y: this.origin.y, width: this.size.width, height: this.size.height};
    }


    top():number {
        return this.origin.y;
    }

    resize(deltaWidth:number, deltaHeight:number):RectangleBounds {
        this.origin.x -= deltaWidth;
        this.origin.y -= deltaHeight;
        this.size.width += 2 * deltaWidth;
        this.size.height += 2 * deltaHeight;
        return this;
    }


}