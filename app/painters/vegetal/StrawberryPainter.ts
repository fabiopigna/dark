import {IPainter} from "../../nature/interface/IPainter";
import {IVegetablePainter} from "./IVegetablePainter";
import {IVegetable} from "../../nature/vegetable/IVegetable";
import {Strawberry} from "../../nature/vegetable/Strawberry";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export class StrawberryPainter implements IVegetablePainter {

    private strawberry:Strawberry;
    private snapGroup:Snap.Paper;
    private snapStrawberry:Snap.Element;

    constructor(snap:Snap.Paper, strawberry:Strawberry) {
        this.strawberry = strawberry;
        this.snapGroup = snap.g().addClass('strawberry_g');
        this.snapGroup.node.setAttribute('transform', 'translate(' + strawberry.getBounds().getOrigin().x + ',' + strawberry.getBounds().getOrigin().y + ')');
        this.snapStrawberry = this.snapGroup.path().attr({fill: Snap.hsl(0, 0, 0.5)});
        this.snapStrawberry.attr(this.strawberry.getBounds().toSnap());
    }


    getVegetable():IVegetable {
        return this.strawberry;
    }

    destroy():void {
        this.snapGroup.remove();
    }


    repaint(elapsed:number) {
        this.snapStrawberry.node.setAttribute('d', this.strawberry.getBounds().toSnapString());

    }

}