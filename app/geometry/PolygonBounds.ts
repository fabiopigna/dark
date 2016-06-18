import {Point} from "./Point";
import {IBounds} from "./IBounds";
import {ISnapBounds} from "../nature/interface/ISnapBounds";
import {G} from "../util/G";
import Polygon = SAT.Polygon;

/**
 * Created by fabiopigna on 02/06/2016.
 */
export class PolygonBounds implements IBounds,ISnapBounds {
    private points:Point[];
    private closed:boolean;
    private center:Point;
    private origin:Point;
    private polygonSAT:SAT.Polygon;


    constructor(origin:Point, points:Point[], closed?:boolean) {
        this.origin = origin;
        this.points = points;
        this.closed = closed;
        this.center = G.centerFromPoints(origin, points);
        this.polygonSAT = G.pointsToSAT(origin, points);
    }

    getPoints():Point[] {
        return this.points;
    }

    setPoints(points:Point[]):void {
        this.points = points;
        this.center = G.centerFromPoints(this.origin, points);
        this.polygonSAT = G.pointsToSAT(this.origin, points);
    }

    toSnap():{} {
        return {d: this.toSnapString()};
    }


    getCenter():Point {
        return this.center;
    }

    getCollidableBounds():SAT.Polygon {
        return this.polygonSAT;
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