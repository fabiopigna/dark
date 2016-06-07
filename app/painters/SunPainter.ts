import {IPainter} from "../nature/interface/IPainter";
import {Sun} from "../nature/Sun";
import Paper = Snap.Paper;
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class SunPainter implements IPainter {
    private sun:Sun;
    private circle:Snap.Element;
    private circleG:Snap.Paper;

    constructor(snap:Paper, sun:Sun) {
        this.sun = sun;
        this.circleG = snap.g();
        this.circleG.node.setAttribute('transform', 'translate(' + this.sun.getBounds().x + ',' + this.sun.getBounds().y + ')');
        this.circle = this.circleG.circle(this.sun.getBounds().r, this.sun.getBounds().r, this.sun.getBounds().r).attr({fill: '#666'});
    }

    repaint(elapsed:number) {
        var bounds = this.sun.getBounds();
        this.circleG.node.setAttribute('transform', 'translate(' + bounds.x + ', ' + bounds.y + ')');
        this.circle.node.setAttribute('r', '' + bounds.r);
        this.circle.node.setAttribute('fill', Snap.hsl(0, 0, (0.2 + 0.8 * this.sun.getSunlight())).toString());
    }


    destroy():void {
        this.circleG.remove();
    }
}