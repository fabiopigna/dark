import Paper = Snap.Paper;
import {IFieldLayerListener} from "./IFieldLayerListener";
import {FieldLayer} from "./FieldLayer";
import {IVegetable} from "../IVegetable";
import {IVegetablePainterConstructor} from "../IVegetablePainterConstructor";
import {IVegetablePainter} from "../IVegetablePainter";
import {IPainter} from "../../interface/IPainter";
import {VegetablePaintConfig} from "../VegetablePaintConfig";
/**
 * Created by fabiopigna on 06/06/2016.
 */

export class FieldLayerPainter implements IFieldLayerListener, IPainter {


    private vegetablePainters:IVegetablePainter[];
    private snapGroup:Snap.Paper;
    private ctor:IVegetablePainterConstructor;

    constructor(snap:Paper, fieldLayer:FieldLayer, config:VegetablePaintConfig) {
        this.snapGroup = snap.g().addClass('field_layer_g');
        this.ctor = config.paintConstructor;
        this.vegetablePainters = fieldLayer.getVegetables().map((vegetable:IVegetable)=> new this.ctor(snap, vegetable));
        fieldLayer.addListener(this);
    }

    repaint(elapsed:number) {
        this.vegetablePainters.forEach((painter:IVegetablePainter)=> painter.repaint(elapsed));
    }

    createVegetable(newVegetable:IVegetable):void {
        this.vegetablePainters.push(new this.ctor(this.snapGroup, newVegetable));
    }

    removeVegetable(vegetable:IVegetable):void {
        var toRemove = this.vegetablePainters.filter((painter:IVegetablePainter)=> painter.getVegetable() === vegetable)[0];
        toRemove.destroy();
        this.vegetablePainters.remove(toRemove);
    }


    destroy():void {
        this.snapGroup.remove();
        this.vegetablePainters.forEach((painter:IPainter)=> painter.destroy());
    }
}