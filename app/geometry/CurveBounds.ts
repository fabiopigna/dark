import {ISnapBounds} from "../nature/interface/ISnapBounds";
import {Point} from "./Point";
import {RectangleBounds} from "./RectangleBounds";
import {Size} from "./Size";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export class CurveBounds implements ISnapBounds {

    private points:Point[];


    constructor(points:Point[]) {
        this.points = points;

    }

    toSnap():{} {
        return {d: this.toSnapString()};
    }

    toSnapString():string {

        let [first, ...others] = this.points;
        let path = 'm ' + first.x + ' ' + first.y + ' C ';
        path = others.reduce((path:string, point:Point)=> {
            return path + ' ' + point.x + ' ' + point.y;
        }, path);
        // <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
        return path
    }

    toRectangleBounds():RectangleBounds {
        var result = this.points.reduce((result:{xMax:number, xMin:number,yMax:number, yMin:number}, point:Point)=> {
            result.xMax = Math.max(point.x, result.xMax);
            result.xMin = Math.min(point.x, result.xMin);
            result.yMax = Math.max(point.y, result.yMax);
            result.yMin = Math.min(point.y, result.yMin);
            return result;
        }, {xMax: -Infinity, xMin: Infinity, yMax: -Infinity, yMin: Infinity});
        return new RectangleBounds(new Point(result.xMin, result.yMin), new Size(result.xMax - result.xMin, result.yMax - result.yMin));
    }


    getPoints():Point[] {
        return this.points;
    }
}