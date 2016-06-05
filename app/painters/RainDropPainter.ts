import {IPainter} from "../nature/interface/IPainter";
import {LineBounds} from "../geometry/LineBounds";
import {WeatherC} from "../nature/constants/NatureConstants";
import {RandomPercent} from "../util/RandomPercent";
import {ICloudListener} from "../nature/listeners/ICloudListener";
/**
 * Created by fabiopigna on 05/06/2016.
 */
export class RainDropPainter implements IPainter,ICloudListener {

    private snapRain:Snap.Element;
    private timeToDrop:number;
    private dashOffset:number;

    private rainDropSize:number = WeatherC.RAIN_LENGTH + WeatherC.RAIN_SPACER;
    private rainDropString:string = WeatherC.RAIN_LENGTH + ' ' + WeatherC.RAIN_SPACER;
    private raining:boolean;

    constructor(snap:Snap.Paper, rainBounds:LineBounds) {
        this.snapRain = snap.path().attr({
            stroke: WeatherC.RAIN_COLOR,
            strokeDasharray: this.rainDropString,
            visibility: 'hidden'
        });
        this.snapRain.attr(rainBounds.toSnap());
        this.dashOffset = new RandomPercent(this.rainDropSize, 0.5).getRandomRound();
        this.timeToDrop = new RandomPercent(WeatherC.RAIN_TIME_TO_DROP, 0.2).getRandomRound();
    }

    repaint(elapsed:number) {
        if (this.raining) {
            this.snapRain.node.setAttribute('stroke-dashoffset', (this.dashOffset - (elapsed % this.timeToDrop) / this.timeToDrop * this.rainDropSize).toFixed(0));
        }
    }


    startRain():void {
        this.snapRain.node.style.setProperty('visibility', 'visible');
        this.raining = true;
    }

    stopRain():void {
        this.snapRain.node.style.setProperty('visibility', 'hidden');
        this.raining = false;
    }

    destroy() {
        this.snapRain.remove();
    }
}