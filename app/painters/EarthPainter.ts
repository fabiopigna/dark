import {IPainter} from "../nature/interface/IPainter";
import {Earth} from "../nature/Earth";
import Paper = Snap.Paper;
import {Forest} from "../nature/vegetable/Forest";
import {ForestPainter} from "./vegetal/ForestPainter";
import {FieldPainter} from "./vegetal/FieldPainter";
import {Strawberry} from "../nature/vegetable/Strawberry";
import {StrawberryPainter} from "./vegetal/StrawberryPainter";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class EarthPainter implements IPainter {
    private rect:Snap.Element;
    private line:Snap.Element;
    private forestPainters:ForestPainter[];
    private strawberryFieldPainter:FieldPainter[];

    constructor(snap:Paper, earth:Earth) {

        this.rect = snap.rect(0, 0, 0, 0).attr({fill: '#222'}).attr(earth.getBounds().toSnap());
        this.line = snap.path().attr({stroke: '#aaa'}).attr(earth.getBounds().getTopLine().toSnap());
        this.forestPainters = earth.getForests().map((forest:Forest)=> {
            return new ForestPainter(snap, forest);
        });


        this.strawberryFieldPainter = [];
        this.strawberryFieldPainter.push(new FieldPainter(snap, earth.getStrawberryField(), StrawberryPainter));


    }

    repaint(elapsed:number) {
        this.forestPainters.forEach((forestPainter:ForestPainter)=> forestPainter.repaint(elapsed));
        this.strawberryFieldPainter.forEach((strawberryFieldPainter:FieldPainter)=> strawberryFieldPainter.repaint(elapsed));

    }


    destroy():void {
        this.forestPainters.forEach((forestPainter:ForestPainter)=> forestPainter.destroy());
        this.strawberryFieldPainter.forEach((fieldPainter:FieldPainter)=> fieldPainter.destroy());
    }
}