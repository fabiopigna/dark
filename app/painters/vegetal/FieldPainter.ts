import Paper = Snap.Paper;
import {IFieldListener} from "../../nature/vegetable/IFieldListener";
import {Field} from "../../nature/vegetable/Field";
import {IVegetable} from "../../nature/vegetable/IVegetable";
import {IVegetablePainterConstructor} from "./IVegetablePainterConstructor";
import {IVegetablePainter} from "./IVegetablePainter";
import {IPainter} from "../../nature/interface/IPainter";
/**
 * Created by fabiopigna on 06/06/2016.
 */

export class FieldPainter implements IFieldListener, IPainter {


    private vegetablePainters:IVegetablePainter[];
    private snap:Snap.Paper;
    private ctor:IVegetablePainterConstructor;

    constructor(snap:Paper, field:Field, ctor:IVegetablePainterConstructor) {
        this.snap = snap;
        this.ctor = ctor;
        this.vegetablePainters = field.getVegetables().map((vegetable:IVegetable)=> {
            return new ctor(snap, vegetable);
        });
        field.addListener(this);
    }

    repaint(elapsed:number) {
        this.vegetablePainters.forEach((vegetablePainter:IVegetablePainter)=> {
            vegetablePainter.repaint(elapsed)
        });
    }

    createVegetable(newVegetable:IVegetable):void {
        this.vegetablePainters.push(new this.ctor(this.snap, newVegetable));
    }

    removeVegetable(vegetable:IVegetable):void {
        var toRemove = this.vegetablePainters.filter((vegetablePainter:IVegetablePainter)=> {
            return vegetablePainter.getVegetable() === vegetable;
        })[0];
        toRemove.destroy();
        this.vegetablePainters.remove(toRemove);
    }


    destroy():void {
        this.vegetablePainters.forEach((painter:IPainter)=>{painter.destroy()});
    }
}