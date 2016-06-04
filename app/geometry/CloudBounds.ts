import {Point} from "./Point";
import {LineBounds} from "./LineBounds";
import {RectangleBounds} from "./RectangleBounds";
import {Size} from "./Size";
import {RandomOption} from "../util/RandomOption";
import {PolygonBounds} from "./PolygonBounds";
/**
 * Created by fabiopigna on 04/06/2016.
 */
export class CloudBounds extends PolygonBounds {

    private origin:Point;

    constructor(origin:Point, maxWidth:number, maxHeight:number) {
        var rectangleBounds = new RectangleBounds(new Point(0, 0), new Size(maxWidth, maxHeight));
        var bottomLine = rectangleBounds.getBottomLine();
        var middlePoint = bottomLine.getRandomPoint(new RandomOption(0.5, 0.2));
        var bottomLeftLine = new LineBounds(bottomLine.firstPoint, middlePoint);
        var bottomRightLine = new LineBounds(middlePoint, bottomLine.secondPoint);

        var topLeftPoint = bottomLeftLine.getRandomPoint(new RandomOption(0.5, 0.3)).moveBy(0, -maxHeight);
        var topRightPoint = bottomRightLine.getRandomPoint(new RandomOption(0.5, 0.3)).moveBy(0, -maxHeight);
        var t0 = new PolygonBounds([bottomLeftLine.firstPoint, topLeftPoint, bottomLeftLine.secondPoint]);
        var t1 = new PolygonBounds([bottomRightLine.firstPoint, topRightPoint, bottomRightLine.secondPoint]);

        super(t0.getPoints().concat(t1.getPoints()));
        this.origin = origin;
    }

    translateX(x:number) {
        this.origin.x = x;
    }

    getOrigin():Point {
        return this.origin;
    }


}