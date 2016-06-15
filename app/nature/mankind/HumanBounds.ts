import {Point} from "../../geometry/Point";
import {HumanC} from "./HumanC";
import {ICollidableBounds} from "../../util/ICollidableBounds";
import Vector = SAT.Vector;
import Polygon = SAT.Polygon;
import {Delta} from "../../geometry/Delta";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class HumanBounds implements ICollidableBounds {

    private origin:Point;
    private points:Point[];

    private originSAT:SAT.Vector;
    private boundsSAT:SAT.Polygon;

    constructor(origin:Point) {
        this.origin = origin;
        this.points = [];
        this.points.push(new Point(-0.5 * HumanC.WIDTH, 0));
        this.points.push(new Point(-0.5 * HumanC.WIDTH, -HumanC.HEIGHT * 0.8));
        this.points.push(new Point(0, -HumanC.HEIGHT));
        this.points.push(new Point(+0.5 * HumanC.WIDTH, -HumanC.HEIGHT * 0.8));
        this.points.push(new Point(+0.5 * HumanC.WIDTH, 0));

        this.originSAT = new Vector(this.origin.x, this.origin.y);
        this.boundsSAT = new Polygon(this.originSAT, this.points.map((point:Point)=>new Vector(point.x, point.y)));
    }

    translate(delta:Delta) {
        this.origin.moveBy(delta);
        this.originSAT.x += delta.x;
        this.originSAT.y += delta.y;
    }

    getPoints():Point[] {
        return this.points;
    }

    getCollidableBounds():SAT.Polygon {
        return this.boundsSAT;
    }

    getOrigin():Point {
        return this.origin;
    }

}