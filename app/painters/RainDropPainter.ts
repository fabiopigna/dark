import {IPainter} from "../nature/interface/IPainter";
import {LineBounds} from "../geometry/LineBounds";
import {WeatherC} from "../nature/constants/NatureConstants";
import {RandomPercent} from "../util/RandomPercent";
/**
 * Created by fabiopigna on 05/06/2016.
 */
export class RainDropPainter implements IPainter {

    private snapRain:Snap.Element;
    private timeToDrop:number;
    private dashOffset:number;

    private rainDropSize:number = WeatherC.RAIN_LENGTH + WeatherC.RAIN_SPACER;
    private rainDropString:string = WeatherC.RAIN_LENGTH + ' ' + WeatherC.RAIN_SPACER;

    constructor(snap:Snap.Paper, rainBounds:LineBounds) {
        this.snapRain = snap.path().attr({stroke: WeatherC.RAIN_COLOR, strokeDasharray: this.rainDropString});
        this.snapRain.attr(rainBounds.toSnap());
        this.dashOffset = new RandomPercent(this.rainDropSize, 0.5).getRandomRound();
        this.timeToDrop = new RandomPercent(WeatherC.RAIN_TIME_TO_DROP, 0.2).getRandomRound();
    }

    repaint(elapsed:number) {
        this.snapRain.attr({strokeDashoffset: this.dashOffset - (elapsed % this.timeToDrop) / this.timeToDrop * this.rainDropSize});
    }
}