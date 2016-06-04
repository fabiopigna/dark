import {IPainter} from "../nature/interface/IPainter";
import {Landscape} from "../nature/Landscape";
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class LandscapePainter implements IPainter {

    private polygons:Snap.Element[];

    constructor(snap:Snap.Paper, landscape:Landscape) {
        this.polygons = landscape.getBounds().map((bounds, index)=> {
            return snap.path().attr({fill: Snap.hsl(0, 0, 0.1+(0.01 * index))}).attr(bounds.toSnap());
        });

    }

    repaint(elapsed:number) {
    }


}