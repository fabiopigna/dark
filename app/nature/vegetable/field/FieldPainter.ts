import Paper = Snap.Paper;
import {IFieldLayerListener} from "./IFieldLayerListener";
import {FieldLayer} from "./FieldLayer";
import {IVegetable} from "../IVegetable";
import {IVegetablePainterConstructor} from "../IVegetablePainterConstructor";
import {IVegetablePainter} from "../IVegetablePainter";
import {IPainter} from "../../interface/IPainter";
import {Field} from "./Field";
import {FieldLayerPainter} from "./FieldLayerPainter";
import {VegetablePaintConfig} from "../VegetablePaintConfig";
/**
 * Created by fabiopigna on 06/06/2016.
 */

export class FieldPainter implements IPainter {


    private fieldLayerPainters:FieldLayerPainter[];
    private snapGroup:Snap.Paper;
    private ctor:IVegetablePainterConstructor;

    constructor(snap:Paper, field:Field, config:VegetablePaintConfig) {
        this.snapGroup = snap.g().addClass('field_g');
        this.fieldLayerPainters = field.getLayers().map((layer:FieldLayer)=> new FieldLayerPainter(snap, layer, config));
    }

    repaint(elapsed:number) {
        this.fieldLayerPainters.forEach((painter:IPainter)=> painter.repaint(elapsed));
    }


    destroy():void {
        this.snapGroup.remove();
        this.fieldLayerPainters.forEach((painter:IPainter)=> painter.destroy());
    }
}