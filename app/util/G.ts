import {Point} from "../geometry/Point";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class G {

    static centerFromPoints(origin:Point, points:Point[]):Point {
        let minx:number = Number.MAX_VALUE;
        let miny:number = Number.MAX_VALUE;
        let maxx:number = -Number.MAX_VALUE;
        let maxy:number = -Number.MAX_VALUE;
        points.forEach((point:Point)=> {
            minx = Math.min(point.x, minx);
            miny = Math.min(point.y, miny);
            maxy = Math.max(point.x, maxy);
            maxy = Math.max(point.y, maxy);
        });
        var x = 0.5 * (maxx - minx);
        var y = 0.5 * (maxy - miny);
        return new Point(origin.x + x, origin.y + y);
    }

    static pointsToSAT(origin:Point, points:Point[]):SAT.Polygon {
        var originSAT = new SAT.Vector(origin.x, origin.y);
        var pointsSAT = points.map((point:Point)=>new SAT.Vector(point.x, point.y));
        return new SAT.Polygon(originSAT, pointsSAT);
    }
}