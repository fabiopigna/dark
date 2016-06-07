import {CurveBounds} from "./CurveBounds";
import {Point} from "./Point";
import {StrawberryC}  from "../nature/constants/NatureConstants";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export class StrawberryBounds extends CurveBounds {

    private origin:Point;
    private width:number = 30;
    private height:number = 15;

    

    constructor(origin:Point) {
        super([new Point(12, 0), new Point(0, -5), new Point(StrawberryC.MAX_WIDTH, -5), new Point(StrawberryC.MAX_WIDTH - 12, 0)]);
        this.origin = origin;
    }

    update(lifeNormalized:number) {
        let [lb,lt, rt, rb] = this.getPoints();
        var newH = -(5  + lifeNormalized*(this.height-5));
        lt.y = newH;
        rt.y = newH;
    }

    getOrigin():Point {
        return this.origin;
    }
}