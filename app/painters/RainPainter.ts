import {IPainter} from "../nature/interface/IPainter";
import {Rain} from "../nature/Rain";
import {LineBounds} from "../geometry/LineBounds";
/**
 * Created by fabiopigna on 04/06/2016.
 */
export class RainPainter implements IPainter {

    private snapRains:Snap.Element[];

    constructor(snap:Snap.Paper, rain:Rain) {
        this.snapRains = rain.getBounds().map((rainBounds:LineBounds)=> {

            var snapRain = snap.path().attr({stroke: '#00f', strokeDasharray: '4 20'});
            snapRain.attr(rainBounds.toSnap());
            return snapRain;
        });

    }

    repaint(elapsed:number) {
        this.snapRains.forEach((snapRain:Snap.Element)=> {
            snapRain.attr({strokeDashoffset: -(elapsed % 500) / 500 * 24});
        })
    }
}