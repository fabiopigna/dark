import {LineBounds} from "./LineBounds";
import {Point} from "./Point";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class CenterLineBounds extends LineBounds {


    constructor(centerPoint:Point, range:number) {
        var leftPoint = new Point(centerPoint.x - range * 0.5, centerPoint.y);
        var rightPoint = new Point(centerPoint.x + range * 0.5, centerPoint.y);
        super(leftPoint, rightPoint);
    }
}