import {IPainter} from "../nature/interface/IPainter";
import {Earth} from "../nature/Earth";
import Paper = Snap.Paper;
import {FieldPainter} from "../nature/vegetable/field/FieldPainter";
import {Field} from "../nature/vegetable/field/Field";
import {TreeC} from "../nature/vegetable/tree/TreeC";
import {StrawberryC} from "../nature/constants/NatureConstants";
import {GrainC} from "../nature/vegetable/grain/GrainC";
import {Human} from "../nature/mankind/Human";
import {HumanC} from "../nature/mankind/HumanC";
import {HumanPainter} from "../nature/mankind/HumanPainter";
import {FireplacePainter} from "../nature/buildings/fireplace/FireplacePainter";
import {Fireplace} from "../nature/buildings/fireplace/Fireplace";
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
        this.strawberryFieldPainter = earth.getStrawberryField().map((field:Field)=>new FieldPainter(snap, field, StrawberryC.PAINT_CONFIG));
        this.grainFieldPainters = earth.getGrainFields().map((field:Field)=>new FieldPainter(snap, field, GrainC.PAINT_CONFIG));
        this.humanPainters = earth.getHumans().map((human:Human)=>new HumanPainter(snap, human, HumanC.PAINT_CONFIG));
        this.fireplacePainters = earth.getFireplaces().map((fireplace:Fireplace)=> new FireplacePainter(snap, fireplace));
    }

    repaint(elapsed:number) {
        this.treeFieldPainters.forEach((painter:FieldPainter)=> painter.repaint(elapsed));
        this.strawberryFieldPainter.forEach((painter:FieldPainter)=> painter.repaint(elapsed));
        this.grainFieldPainters.forEach((painter:FieldPainter)=> painter.repaint(elapsed));
        this.humanPainters.forEach((painter:HumanPainter)=> painter.repaint(elapsed));
        this.fireplacePainters.forEach((painter:IPainter)=> painter.repaint(elapsed));
    }


    destroy():void {
        this.treeFieldPainters.forEach((painter:FieldPainter)=> painter.destroy());
        this.strawberryFieldPainter.forEach((painter:FieldPainter)=> painter.destroy());
        this.grainFieldPainters.forEach((painter:FieldPainter)=> painter.destroy());
        this.humanPainters.forEach((painter:HumanPainter)=> painter.destroy());
        this.fireplacePainters.forEach((painter:IPainter)=> painter.destroy());
    }
}