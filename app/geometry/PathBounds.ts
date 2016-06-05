import {Point} from "./Point";
import {ISnapBounds} from "../nature/interface/ISnapBounds";
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class PathBounds implements ISnapBounds {
    private points:Point[];
    private closed:boolean;


    constructor(points:Point[], closed?:boolean) {
        this.points = points;
        this.closed = closed;
    }

    getPoints():Point[] {
        return this.points;
    }


    toSnap():{} {
        return {d: this.toSnapString()};
    }

    toSnapString():string {
        var path = 'm ' + this.points[0].x + ' ' + this.points[0].y;
        this.points.reduce((prevPoint:Point, point:Point)=> {
            path += ' L ' + point.x + ' ' + point.y;
            return point;
        });
        path += this.closed ? ' z' : '';
        return path;
    }


}