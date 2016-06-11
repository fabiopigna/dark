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

    static LIFE_TIME_TO_GROW:number = 10000;
    static WIDTH:number = 30;
    static DISTANCE_FROM_EARTH:number = 2;
    static MIN_HEIGHT:number = 5;
    static MAX_HEIGHT:number = 80;

    static FIELD_CONFIG:FieldConfig = new FieldConfig()
        .setVegetableConstructor(Tree)
        .setMaxQuantity(5)
        .setMinTimeToBorn(5000)
        .setRangeTimeToBorn(5000)
        .setNumberOfLayer(3)
        .setFieldWidth(200);

    static VEGETABLE_CONFIG = new VegetableConfig()
        .setTimeToGrowBase(10000)
        .setTimeToGrowPercent(Percent.valueOf(0))
        .setTimeToDie(Infinity);

    static PAINT_CONFIG = new VegetablePaintConfig()
        .setPaintConstructor(TreePainter);

}