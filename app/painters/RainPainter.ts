import {IPainter} from "../nature/interface/IPainter";
import {Rain} from "../nature/Rain";
import {LineBounds} from "../geometry/LineBounds";
import {RainDropPainter} from "./RainDropPainter";
import {ICloudListener} from "../nature/listeners/ICloudListener";
/**
 * Created by fabiopigna on 04/06/2016.
 */
export class RainPainter implements IPainter,ICloudListener {
    private rainDropPainters:RainDropPainter[];

    constructor(snap:Snap.Paper, rain:Rain) {
        this.rainDropPainters = rain.getBounds().map((rainBounds:LineBounds)=> {
            return new RainDropPainter(snap, rainBounds);
        });

    }

    repaint(elapsed:number) {
        this.rainDropPainters.forEach((rainDropPainter:RainDropPainter)=> {
            rainDropPainter.repaint(elapsed)
        });
    }

    startRain():void {
        this.rainDropPainters.forEach((rainDropPainter:RainDropPainter)=> {
            rainDropPainter.startRain();
        });
    }

    stopRain():void {
        this.rainDropPainters.forEach((rainDropPainter:RainDropPainter)=> {
            rainDropPainter.stopRain();
        });
    }

    destroy() {
        this.rainDropPainters.forEach((rainDropPainter:RainDropPainter)=> {
            rainDropPainter.destroy();
        })
    }
}