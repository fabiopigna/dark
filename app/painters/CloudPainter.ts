import {IPainter} from "../nature/interface/IPainter";
import {Cloud} from "../nature/Cloud";
import Paper = Snap.Paper;
import {RainPainter} from "./RainPainter";
import {ICloudListener} from "../nature/listeners/ICloudListener";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class CloudPainter implements IPainter, ICloudListener {

    private cloud:Cloud;
    private snap:Snap.Paper;
    private snapCloud:Snap.Element;
    private snapGroup:Snap.Paper;
    private rainPainter:RainPainter;

    constructor(snap:Paper, cloud:Cloud) {
        this.snap = snap;
        this.cloud = cloud;
        this.snapGroup = snap.g().addClass('cloud_g');
        this.snapCloud = this.snapGroup.path().attr({fill: Snap.hsl(0, 0, 0.4)});
        this.snapCloud.attr(this.cloud.getBounds().toSnap());
        this.rainPainter = new RainPainter(this.snapGroup, cloud.getRain());
        this.cloud.addListener(this);
    }

    repaint(elapsed:number) {
        var origin = this.cloud.getBounds().getOrigin();
        var matrix = Snap.matrix();
        var ts = matrix.translate(origin.x, origin.y).toString();
        this.snapGroup.node.setAttribute('transform', 'translate(' + origin.x + ',' + origin.y + ')');
        this.rainPainter.repaint(elapsed);
    }

    startRain():void {
        this.rainPainter.startRain();
        this.snapCloud.node.setAttribute('stroke', '#bbb');
    }

    stopRain():void {
        this.rainPainter.stopRain();
        this.snapCloud.node.setAttribute('stroke', Snap.hsl(0, 0, 0.4).toString());
    }


    destroy():void {
        this.snapGroup.remove();
        this.rainPainter.destroy();
    }

    getCloud():Cloud {
        return this.cloud
    }
}