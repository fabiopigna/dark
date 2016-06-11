import {IPainter} from "../interface/IPainter";
import {Human} from "./Human";
import {HumanPaintConfig} from "./HumanPaintConfig";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class HumanPainter implements IPainter {
    private human:Human;
    private snapGroup:Snap.Paper;

    constructor(snap:Snap.Paper, human:Human, config:HumanPaintConfig) {
        this.snapGroup = snap.g().addClass('human_g');
        this.human = human;

    }

    repaint(elapsed:number) {
        
    }

    destroy():void {
        this.snapGroup.remove();
    }

}