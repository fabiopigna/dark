import {Life} from "../../Life";
import {Vegetable} from "../Vegetable";
import {Field} from "../Field";
import {VegetableConfig} from "../VegetableConfig";
import {Percent} from "../../../util/Percent";
import {LineBounds} from "../../../geometry/LineBounds";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export class Grain extends Vegetable {


    constructor(field:Field) {
        super(field, new VegetableConfig(10000, Percent.valueOf(0.1)));
        console.log('new grain')
    }


    getBounds():LineBounds {
        return this.getField().getBounds();
    }
}