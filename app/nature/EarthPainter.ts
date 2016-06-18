import {IPainter} from "./interface/IPainter";
import {Earth} from "./Earth";
import {FieldPainter} from "./vegetable/field/FieldPainter";
import {Field} from "./vegetable/field/Field";
import {TreeC} from "./vegetable/tree/TreeC";
import {GrainC} from "./vegetable/grain/GrainC";
import {Human} from "./mankind/Human";
import {HumanC} from "./mankind/HumanC";
import {HumanPainter} from "./mankind/HumanPainter";
import {FireplacePainter} from "./buildings/fireplace/FireplacePainter";
import {Fireplace} from "./buildings/fireplace/Fireplace";
import Paper = Snap.Paper;
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class EarthPainter implements IPainter {
    private rect:Snap.Element;
    private line:Snap.Element;
    private treeFieldPainters:FieldPainter[];
    private strawberryFieldPainter:FieldPainter[];
    private grainFieldPainters:FieldPainter[];
    private humanPainters:HumanPainter[];
    private fireplacePainters:FireplacePainter[];

    constructor(snap:Paper, earth:Earth) {

        this.rect = snap.rect(0, 0, 0, 0).attr({fill: '#222'}).attr(earth.getBounds().toSnap());
        this.line = snap.path().attr({stroke: '#aaa'}).attr(earth.getBounds().getTopLine().toSnap());

        this.treeFieldPainters = earth.getTreeFields().map((field:Field)=> new FieldPainter(snap, field, TreeC.PAINT_CONFIG));
        this.grainFieldPainters = earth.getGrainFields().map((field:Field)=>new FieldPainter(snap, field, GrainC.PAINT_CONFIG));
        this.humanPainters = earth.getHumans().map((human:Human)=>new HumanPainter(snap, human, HumanC.PAINT_CONFIG));
        this.fireplacePainters = earth.getFireplaces().map((fireplace:Fireplace)=> new FireplacePainter(snap, fireplace));
    }

    repaint(elapsed:number) {
        this.treeFieldPainters.forEach((painter:FieldPainter)=> painter.repaint(elapsed));
        this.grainFieldPainters.forEach((painter:FieldPainter)=> painter.repaint(elapsed));
        this.humanPainters.forEach((painter:HumanPainter)=> painter.repaint(elapsed));
        this.fireplacePainters.forEach((painter:IPainter)=> painter.repaint(elapsed));
    }


    destroy():void {
        this.treeFieldPainters.forEach((painter:FieldPainter)=> painter.destroy());
        this.grainFieldPainters.forEach((painter:FieldPainter)=> painter.destroy());
        this.humanPainters.forEach((painter:HumanPainter)=> painter.destroy());
        this.fireplacePainters.forEach((painter:IPainter)=> painter.destroy());
    }
}