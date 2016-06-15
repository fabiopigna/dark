import {HumanLifeConfig} from "./HumanLifeConfig";
import {Percent} from "../../util/Percent";
import {HumanPaintConfig} from "./HumanPaintConfig";
import {HumanPainter} from "./HumanPainter";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class HumanC {

    static LIFE_CONFIG:HumanLifeConfig = new HumanLifeConfig()
        .setTimeToGrowBase(5000)
        .setTimeToGrowPercent(Percent.valueOf(0))
        .setTimeToDie(Infinity);

    static PAINT_CONFIG:HumanPaintConfig = new HumanPaintConfig()
        .setPaintConstructor(HumanPainter);
    static WIDTH:number = 8;
    static HEIGHT:number = 20 ;

}