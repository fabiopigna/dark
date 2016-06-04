import {IPainter} from "../nature/interface/IPainter";
import {Cloud} from "../nature/Cloud";
import Paper = Snap.Paper;
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class CloudPainter implements IPainter {
    private cloud:Cloud;
    private snap:Snap.Paper;
    private snapCloud:Snap.Element;
    private snapGroup:Snap.Paper;

    constructor(snap:Paper, cloud:Cloud) {
        this.snap = snap;
        this.cloud = cloud;
        this.snapGroup = snap.g().addClass('cloud_g');
        this.snapCloud = this.snapGroup.path().attr({fill: '#666'});

    }

    repaint(elapsed:number) {
        var origin = this.cloud.getBounds().getOrigin();
        var matrix = Snap.matrix();
        var ts = matrix.translate(origin.x, origin.y).toTransformString();
        this.snapGroup.attr({'transform': ts});
        this.snapCloud.attr(this.cloud.getBounds().toSnap())
    }


}