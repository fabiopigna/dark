import {Vegetable} from "../Vegetable";
import {FieldLayer} from "../field/FieldLayer";
import {Percent} from "../../../util/Percent";
import {LineBounds} from "../../../geometry/LineBounds";
import {RandomPercent} from "../../../util/RandomPercent";
import {GrainC} from "./GrainC";
import {Delta} from "../../../geometry/Delta";
import {IUpdatable} from "../../interface/IUpdatable";
import {PolygonBounds} from "../../../geometry/PolygonBounds";
import {Point} from "../../../geometry/Point";
/**
 * Created by fabiopigna on 08/06/2016.
 */

export class Grain extends Vegetable {
    private bounds:PolygonBounds;
    private maxHeight:number;


    constructor(fieldLayer:FieldLayer, level:number) {
        super(fieldLayer, level, GrainC.VEGETABLE_CONFIG);
        this.bounds = new PolygonBounds(this.getRoot(), [new Point(0, 0), new Point(0, -1)]);
        this.maxHeight = new RandomPercent(GrainC.MAX_HEIGHT, Percent.valueOf(0.1)).getRandomRound();
    }

    getBounds():PolygonBounds {
        return this.bounds;
    }

    update(elapsed:number):void {
        this.getLife().grow(elapsed, this.isRaining());
        if (this.getLife().isChanged()) {
            let [first, last] = this.bounds.getPoints();
            last.y = -this.getLife().normalized() * this.maxHeight - 1;
        }
    }

    isRaining():boolean {
        return this.getFieldLayer().isRaining();
    }
}