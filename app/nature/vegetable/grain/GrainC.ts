import {Percent} from "../../../util/Percent";
import {VegetableConfig} from "../VegetableConfig";
import {Grain} from "./Grain";
import {FieldConfig} from "../field/FieldConfig";
import {VegetablePaintConfig} from "../VegetablePaintConfig";
import {GrainPainter} from "./GrainPainter";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class GrainC {
    static MAX_HEIGHT:number = 10;

    static FIELD_CONFIG:FieldConfig = new FieldConfig()
        .setVegetableConstructor(Grain)
        .setMaxQuantity(20)
        .setMinTimeToBorn(1000)
        .setRangeTimeToBorn(50)
        .setNumberOfLayer(3)
        .setFieldWidth(100);

    static VEGETABLE_CONFIG:VegetableConfig = new VegetableConfig()
        .setTimeToGrowBase(5000)
        .setTimeToGrowPercent(new Percent(0.0));

    static PAINT_CONFIG:VegetablePaintConfig = new VegetablePaintConfig()
        .setPaintConstructor(GrainPainter);

}