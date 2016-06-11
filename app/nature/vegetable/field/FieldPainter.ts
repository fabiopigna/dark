import Paper = Snap.Paper;
import {IFieldListener} from "./IFieldListener";
import {Field} from "./Field";
import {IVegetable} from "../IVegetable";
import {IVegetablePainterConstructor} from "../IVegetablePainterConstructor";
import {IVegetablePainter} from "../IVegetablePainter";
import {IPainter} from "../../interface/IPainter";
/**
 * Created by fabiopigna on 06/06/2016.
 */

export class FieldPainter implements IFieldListener, IPainter {


    private vegetablePainters:IVegetablePainter[];
    private snapGroup:Snap.Paper;
    private ctor:IVegetablePainterConstructor;

    constructor(snap:Paper, field:Field, ctor:IVegetablePainterConstructor) {
        this.snapGroup = snap.g().addClass('field_g');
        this.ctor = ctor;
        this.vegetablePainters = field.getVegetables().map((vegetable:IVegetable)=> new ctor(snap, vegetable));
        field.addListener(this);
    }

    repaint(elapsed:number) {
        this.vegetablePainters.forEach((painter:IVegetablePainter)=> painter.repaint(elapsed));
    }

    createVegetable(newVegetable:IVegetable):void {
        this.vegetablePainters.push(new this.ctor(this.snapGroup, newVegetable));
    }

    removeVegetable(vegetable:IVegetable):void {
        var toRemove = this.vegetablePainters.filter((vegetablePainter:IVegetablePainter)=> {
            return vegetablePainter.getVegetable() === vegetable;
        })[0];
        toRemove.destroy();
        this.vegetablePainters.remove(toRemove);
    }


    destroy():void {
        this.snapGroup.remove();
        this.vegetablePainters.forEach((painter:IPainter)=> painter.destroy());
    }
}