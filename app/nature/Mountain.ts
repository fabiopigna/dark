import {Point} from "../geometry/Point";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Mountain {
    private points:Point[] = [];


    constructor(height:number, maxWidth:number) {
        var start = new Point(0, height + (0.5 - Math.random()) * height * 0.2);
        this.points.push(start);
        this.newPeak(start, maxWidth);
    }

    private newPeak(from:Point, maxWidth:number) {
        if (from.x < maxWidth) {


            var angle = -Math.PI / 4 + (0.5 - Math.random()) * Math.PI / 4;
            var width = maxWidth * 0.1 + Math.random() * 0.3 * maxWidth;
            var x2 = from.x + width * 0.5;
            var p2 = new Point(x2, from.y + Math.sin(angle) * (x2 - from.x));
            this.points.push(p2);

            var x3 = from.x + width;
            var p3 = new Point(x3, p2.y - Math.sin(angle) * (x3 - x2));
            this.points.push(p3);
            this.newPeak(p3, maxWidth);
        }
    }

    getPoints():Point[] {
        return this.points;
    }
}