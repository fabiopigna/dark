import {Point} from "../../geometry/Point";
import {LineBounds} from "../../geometry/LineBounds";
import {RectangleBounds} from "../../geometry/RectangleBounds";
import {Size} from "../../geometry/Size";
import {RandomOption} from "../../util/RandomOption";
import {PolygonBounds} from "../../geometry/PolygonBounds";
import Polygon = SAT.Polygon;
import Vector = SAT.Vector;
import {Delta} from "../../geometry/Delta";
/**
 * Created by fabiopigna on 04/06/2016.
 */
export class CloudBounds extends PolygonBounds {

    private bottomLine:LineBounds;
    private boundsSAT:SAT.Polygon;
    private originSAT:SAT.Vector;

    constructor(origin:Point, maxWidth:number, maxHeight:number) {
        var rectangleBounds = new RectangleBounds(new Point(0, 0), new Size(maxWidth, maxHeight));
        var bottomLine = rectangleBounds.getBottomLine();
        var middlePoint = bottomLine.getRandomPoint(new RandomOption(0.5, 0.2));
        var bottomLeftLine = new LineBounds(bottomLine.firstPoint, middlePoint);
        var bottomRightLine = new LineBounds(middlePoint, bottomLine.secondPoint);
        var topLeftPoint = bottomLeftLine.getRandomPoint(new RandomOption(0.5, 0.3)).moveBy(new Delta(0, -maxHeight));

        var topRightPoint = bottomRightLine.getRandomPoint(new RandomOption(0.5, 0.3)).moveBy(new Delta(0, -maxHeight));
        var t0 = new PolygonBounds(origin, [bottomLeftLine.firstPoint, topLeftPoint, bottomLeftLine.secondPoint]);
        var t1 = new PolygonBounds(origin, [bottomRightLine.firstPoint, topRightPoint, bottomRightLine.secondPoint]);

        var points = [bottomLeftLine.firstPoint, bottomRightLine.secondPoint, topRightPoint, middlePoint, topLeftPoint];
        super(origin, points, true);


        this.originSAT = new Vector(this.origin.x, this.origin.y);
        this.boundsSAT = new Polygon(this.originSAT, this.getPoints().map((point:Point)=> {
            return new Vector(point.x, point.y)
        }));
        this.bottomLine = bottomLine;
    }

    translateX(x:number) {
        this.origin.x = x;
        this.originSAT.x = x;
    }

    getBottomLine() {
        return this.bottomLine;
    }

    toSAT():Polygon {
        return this.boundsSAT;
    }

    isOver(bounds:LineBounds) {
        let first = bounds.firstPoint;
        let second = bounds.secondPoint;
        let firstInside = first.x > this.bottomLine.firstPoint.x + this.origin.x && first.x < this.bottomLine.secondPoint.x + this.origin.x;
        let secondInside = second.x > this.bottomLine.firstPoint.x + this.origin.x && second.x < this.bottomLine.secondPoint.x + this.origin.x;
        return firstInside || secondInside;
    }
}