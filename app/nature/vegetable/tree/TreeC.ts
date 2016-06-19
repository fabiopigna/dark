import {TreePainter} from "./TreePainter";
import {FieldConfig} from "../field/FieldConfig";
import {Tree} from "./Tree";
import {VegetableConfig} from "../VegetableConfig";
import {Percent} from "../../../util/Percent";
import {VegetablePaintConfig} from "../VegetablePaintConfig";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class TreeC {

    static WIDTH:number = 30;
    static DISTANCE_FROM_EARTH:number = 2;
    static MIN_HEIGHT:number = 5;
    static MAX_HEIGHT:number = 80;

    static FIELD_CONFIG:FieldConfig = new FieldConfig()
        .setVegetableConstructor(Tree)
        .setMaxQuantity(4)
        .setMinTimeToBorn(5000)
        .setRangeTimeToBorn(5000)
        .setNumberOfLayer(3)
        .setFieldWidth(300);

    static VEGETABLE_CONFIG = new VegetableConfig()
        .setTimeToGrowBase(5000)
        .setTimeToGrowPercent(Percent.valueOf(0));

    static PAINT_CONFIG = new VegetablePaintConfig()
        .setPaintConstructor(TreePainter);

}