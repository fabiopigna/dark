import {IPainter} from "../nature/interface/IPainter";
import {Earth} from "../nature/Earth";
import Paper = Snap.Paper;
import {Forest} from "../nature/vegetable/forest/Forest";
import {ForestPainter} from "../nature/vegetable/forest/ForestPainter";
import {FieldPainter} from "../nature/vegetable/field/FieldPainter";
import {StrawberryPainter} from "../nature/vegetable/strawberry/StrawberryPainter";
import {GrainPainter} from "../nature/vegetable/grain/GrainPainter";
import {Field} from "../nature/vegetable/field/Field";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class EarthPainter implements IPainter {
    private rect:Snap.Element;
    private line:Snap.Element;
    private forestPainters:ForestPainter[];
    private strawberryFieldPainter:FieldPainter[];
    private grainFieldPainters:FieldPainter[];

    constructor(snap:Paper, earth:Earth) {

        this.rect = snap.rect(0, 0, 0, 0).attr({fill: '#222'}).attr(earth.getBounds().toSnap());
        this.line = snap.path().attr({stroke: '#aaa'}).attr(earth.getBounds().getTopLine().toSnap());
        this.forestPainters = earth.getForests().map((forest:Forest)=> new ForestPainter(snap, forest));
        this.strawberryFieldPainter = earth.getStrawberryField().map((field:Field)=>new FieldPainter(snap, field, StrawberryPainter));
        this.grainFieldPainters = earth.getGrainFields().map((field:Field)=>new FieldPainter(snap, field, GrainPainter));


    }

    repaint(elapsed:number) {
        this.forestPainters.forEach((painter:ForestPainter)=> painter.repaint(elapsed));
        this.strawberryFieldPainter.forEach((painter:FieldPainter)=> painter.repaint(elapsed));
        this.grainFieldPainters.forEach((painter:FieldPainter)=> painter.repaint(elapsed));

    }


    destroy():void {
        this.forestPainters.forEach((forestPainter:ForestPainter)=> forestPainter.destroy());
        this.strawberryFieldPainter.forEach((fieldPainter:FieldPainter)=> fieldPainter.destroy());
        this.grainFieldPainters.forEach((painter:FieldPainter)=> painter.destroy());
    }
}