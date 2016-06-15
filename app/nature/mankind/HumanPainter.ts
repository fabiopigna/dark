import {IPainter} from "../interface/IPainter";
import {Human} from "./Human";
import {HumanPaintConfig} from "./HumanPaintConfig";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class HumanPainter implements IPainter {
    private human:Human;
    private snapGroup:Snap.Paper;
    private snapHuman:Snap.Element;

    constructor(snap:Snap.Paper, human:Human, config:HumanPaintConfig) {
        this.snapGroup = snap.g().addClass('human_g');
        this.snapHuman = this.snapGroup.path().attr({fill: '#eee'});
        this.human = human;
    }

    toSnapString():string {
        let [bl,tl,tc,tr,br] = this.human.getBounds().getPoints();
        let path = ' m ' + bl.x + ' ' + bl.y;
        path += ' L ' + tl.x + ' ' + tl.y;
        path += ' S ' + tc.x + ' ' + tc.y + ' ' + tr.x + ' ' + tr.y;
        path += ' L ' + br.x + ' ' + br.y;
        return path
    }

    toOriginString():string {
        return 'translate(' + this.human.getBounds().getOrigin().x + ', ' + this.human.getBounds().getOrigin().y + ')';
    }


    repaint(elapsed:number) {
        this.snapGroup.node.setAttribute('transform', this.toOriginString());
        this.snapHuman.node.setAttribute('d', this.toSnapString());
    }

    destroy():void {
        this.snapGroup.remove();
    }

}