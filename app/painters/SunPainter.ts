import {IPainter} from "../nature/interface/IPainter";
import {Sun} from "../nature/Sun";
import Paper = Snap.Paper;
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class SunPainter implements IPainter {
    private sun:Sun;
    private circle:Snap.Element;

    constructor(snap:Paper, sun:Sun) {
        this.sun = sun;
        this.circle = snap.circle(0, 0, 10).attr({fill: '#666'});
    }

    repaint(elapsed:number) {
        var bounds = this.sun.getBounds();
        this.circle.node.setAttribute('cx', '' + bounds.cx);
        this.circle.node.setAttribute('cy', '' + bounds.cy);
        this.circle.node.setAttribute('r', '' + bounds.r);
        this.circle.node.setAttribute('fill', Snap.hsl(0, 0, (0.2 + 0.8 * this.sun.getSunlight())).toString());
    }
}