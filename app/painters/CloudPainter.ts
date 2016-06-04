import {IPainter} from "../nature/interface/IPainter";
import {Cloud} from "../nature/Cloud";
import Paper = Snap.Paper;
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class CloudPainter implements IPainter {
    private cloud:Cloud;
    private snap:Snap.Paper;
    private circle:Snap.Element;

    constructor(snap:Paper, cloud:Cloud) {
        this.snap = snap;
        this.cloud = cloud;
        this.circle = snap.circle(0, 0, 10).attr({fill: '#666'});
    }

    repaint(elapsed:number) {
        this.circle.attr(this.cloud.getBounds().toSnap())
    }


}