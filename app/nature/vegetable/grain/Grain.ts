import {Vegetable} from "../Vegetable";
import {Field} from "../field/Field";
import {VegetableConfig} from "../VegetableConfig";
import {Percent} from "../../../util/Percent";
import {LineBounds} from "../../../geometry/LineBounds";
import {RandomPercent} from "../../../util/RandomPercent";
import {GrainC} from "../../constants/NatureConstants";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export class Grain extends Vegetable {
    private bounds:LineBounds;
    private maxHeight:number;


    constructor(field:Field) {
        super(field, new VegetableConfig(10000, Percent.valueOf(0.1)));
        this.bounds = new LineBounds(super.getRoot(), super.getRoot().copy());
        this.maxHeight = new RandomPercent(GrainC.MAX_HEIGHT, Percent.valueOf(0.1)).getRandomRound();
        console.log('new grain')
    }


    getBounds():LineBounds {
        return this.bounds;
    }


    update(elapsed:number):void {
        super.update(elapsed);
        this.bounds.secondPoint.y = this.bounds.firstPoint.y -this.getLife().normalized() * this.maxHeight;
    }
}