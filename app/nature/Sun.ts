import {IUpdatable} from "./interface/IUpdatable";
import {Size} from "../geometry/Size";
import {CircleBounds} from "../geometry/CircleBounds";
import {Point} from "../geometry/Point";
import {ISnapBounds} from "./interface/ISnapBounds";
import {RangedValue} from "../geometry/Range";
/**
 * Created by fabiopigna on 02/06/2016.
 */


export class Sun implements IUpdatable {
    private size:Size;
    private dayDuration:number = 10000;
    private radius:number;
    private center:Point;
    private rangeWidth:RangedValue;
    private rangeHeight:RangedValue;
    private sunValue:number;


    constructor(size:Size) {
        this.size = size;
        this.rangeWidth = new RangedValue(-50, this.size.width +50, 0);
        this.rangeHeight = new RangedValue(this.size.height * 0.7, 0, this.size.height * 0.1);
    }

    update(elapsed:number) {
        var dayTime = (elapsed % this.dayDuration) / this.dayDuration;
        this.sunValue = Math.sin(Math.PI * (dayTime));
        this.center = new Point(this.rangeWidth.get(1 - dayTime), this.rangeHeight.get(this.sunValue));
        this.radius = 10 + (1 - this.sunValue) * 10;
    }

    getBounds():ISnapBounds {
        return new CircleBounds(this.center, this.radius);
    }

    getSunlight():number {
        return this.sunValue;
    }
}