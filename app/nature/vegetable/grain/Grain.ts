import {Vegetable} from "../Vegetable";
import {FieldLayer} from "../field/FieldLayer";
import {Percent} from "../../../util/Percent";
import {LineBounds} from "../../../geometry/LineBounds";
import {RandomPercent} from "../../../util/RandomPercent";
import {GrainC} from "./GrainC";
import {Delta} from "../../../geometry/Delta";
import {IUpdatable} from "../../interface/IUpdatable";
/**
 * Created by fabiopigna on 08/06/2016.
 */

export class Grain extends Vegetable {
    private bounds:LineBounds;
    private maxHeight:number;


    constructor(fieldLayer:FieldLayer, level:number) {
        super(fieldLayer, level, GrainC.VEGETABLE_CONFIG);
        this.bounds = new LineBounds(super.getRoot(), super.getRoot().copy().moveBy(new Delta(0, -1)));
        this.maxHeight = new RandomPercent(GrainC.MAX_HEIGHT, Percent.valueOf(0.1)).getRandomRound();
    }

    getBounds():LineBounds {
        return this.bounds;
    }

    update(elapsed:number):void {
        this.getLife().grow(elapsed, this.isRaining());
        if (this.getLife().isChanged()) {
            this.bounds.secondPoint.y = this.bounds.firstPoint.y - this.getLife().normalized() * this.maxHeight - 1;
        }
    }

    isRaining():boolean {
        return this.getFieldLayer().isRaining();
    }
}