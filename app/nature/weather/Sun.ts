import {IUpdatable} from "../interface/IUpdatable";
import {Size} from "../../geometry/Size";
import {CircleBounds} from "../../geometry/CircleBounds";
import {Point} from "../../geometry/Point";
import {ISnapBounds} from "../interface/ISnapBounds";
import {RangedValue} from "../../geometry/RangedValue";
/**
 * Created by fabiopigna on 02/06/2016.
 */


export class Sun implements IUpdatable {
    private size:Size;
    private dayDuration:number = 10000;
    private center:Point;
    private rangeWidth:RangedValue;
    private rangeHeight:RangedValue;
    private sunValue:number;
    private bounds:CircleBounds;


    constructor(size:Size) {
        this.size = size;
        this.rangeWidth = new RangedValue(-50, this.size.width + 50);
        this.rangeHeight = new RangedValue(this.size.height * 0.7, this.size.height * 0.1);
        this.center = new Point(this.rangeWidth.get(1), this.rangeHeight.get(0));
        this.bounds = new CircleBounds(this.center, 20);
    }

    update(elapsed:number) {
        var dayTime = (elapsed % this.dayDuration) / this.dayDuration;
        this.sunValue = Math.sin(Math.PI * (dayTime));
        this.center.x = this.rangeWidth.get(1 - dayTime);
        this.center.y = this.rangeHeight.get(this.sunValue);
        this.bounds.radius = 10 + (1 - this.sunValue) * 10;
    }

    getBounds():CircleBounds {
        return this.bounds;
    }

    getSunlight():number {
        return this.sunValue;
    }
}