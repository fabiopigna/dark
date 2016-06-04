import {IPainter} from "../nature/interface/IPainter";
import {Earth} from "../nature/Earth";
import Paper = Snap.Paper;
import {TreePainter} from "./TreePainter";
import {Tree} from "../nature/Tree";
import {Forest} from "../nature/Forest";
import {ForestPainter} from "./ForestPainter";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class EarthPainter implements IPainter {
    private rect:Snap.Element;
    private line:Snap.Element;
    private forestPainters:ForestPainter[];

    constructor(snap:Paper, earth:Earth) {

        this.rect = snap.rect(0, 0, 0, 0).attr({fill: '#222'}).attr(earth.getBounds().toSnap());
        this.line = snap.path().attr({stroke: '#aaa'}).attr(earth.getBounds().getTopLine().toSnap());
        this.forestPainters = earth.getForests().map((forest:Forest)=> {
            return new ForestPainter(snap, forest);
        });


    }

    repaint(elapsed:number) {
        this.forestPainters.forEach((forestPainter:ForestPainter)=> {
            forestPainter.repaint(elapsed)
        });
    }


}