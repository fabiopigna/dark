import {FieldConfig} from "../vegetable/field/FieldConfig";
import {Grain} from "../vegetable/grain/Grain";
import {VegetableConfig} from "../vegetable/VegetableConfig";
import {Percent} from "../../util/Percent";
import {VegetablePaintConfig} from "../vegetable/VegetablePaintConfig";
import {StrawberryPainter} from "../vegetable/strawberry/StrawberryPainter";
/**
 * Created by fabiopigna on 03/06/2016.
 */


export class WeatherC {
    static RAIN_LENGTH:number = 4;
    static RAIN_SPACER:number = 20;
    static RAIN_TIME_TO_DROP:number = 200;
    static RAIN_COLOR:string = '#505050';

}

export class StrawberryC {
    static MAX_HEIGHT:number = 15;
    static MAX_WIDTH:number = 25;

    static PAINT_CONFIG = new VegetablePaintConfig()
        .setPaintConstructor(StrawberryPainter);

}

