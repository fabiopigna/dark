import {ISnapBounds} from "../nature/interface/ISnapBounds";
import {Point} from "./Point";
import {LineBounds} from "./LineBounds";
import {Size} from "./Size";
import {RandomOption} from "../util/RandomOption";
/**
 * Created by fabiopigna on 10/06/2016.
 */
export class MultiLineBounds {
    private root:Point;
    private range:Size;
    private lineNumber:number;
    private lines:LineBounds[];

    constructor(center:Point, range:Size, lineNumber:number) {
        this.root = center;
        this.range = range;
        this.lines = [];
        this.lineNumber = lineNumber;
        for (var i = 0; i < lineNumber; i++) {
            var firstPoint = new Point(center.x - 0.5 * range.width, center.y - 0.5 * range.height - i * 5);
            var lastPoint = new Point(center.x + 0.5 * range.width, center.y + 0.5 * range.height - i * 5);
            this.lines.push(new LineBounds(firstPoint, lastPoint));
        }
    }

    getRandomPoint():Point {
        var randomLine = new RandomOption(2,2).getRandomRound();
        return this.lines[randomLine].getRandomPoint();

    }

}