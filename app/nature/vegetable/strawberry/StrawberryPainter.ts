import {IVegetablePainter} from "../IVegetablePainter";
import {IVegetable} from "../IVegetable";
import {Strawberry} from "./Strawberry";
import {StrawberryBerryPainter} from "./StrawberryBerryPainter";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export class StrawberryPainter implements IVegetablePainter {

    private strawberry:Strawberry;
    private snapGroup:Snap.Paper;
    private snapStrawberryBush:Snap.Element;
    private strawberryBerryPainter:StrawberryBerryPainter;

    constructor(snap:Snap.Paper, strawberry:Strawberry) {
        this.strawberry = strawberry;
        this.snapGroup = snap.g().addClass('strawberry_g');
        this.snapGroup.node.setAttribute('transform', 'translate(' + strawberry.getBounds().getOrigin().x + ',' + strawberry.getBounds().getOrigin().y + ')');
        this.snapStrawberryBush = this.snapGroup.rect(0, 0, 0, 0).attr({fill: Snap.hsl(0, 0, 0.5), stroke: '#777'});
        this.snapStrawberryBush.attr(this.strawberry.getBounds().toSnap());
        this.strawberryBerryPainter = new StrawberryBerryPainter(this.snapGroup, strawberry);
    }


    getVegetable():IVegetable {
        return this.strawberry;
    }

    destroy():void {
        this.snapGroup.remove();
        this.strawberryBerryPainter.destroy();
    }


    repaint(elapsed:number) {
        var bounds = this.strawberry.getBounds();
        this.snapStrawberryBush.node.setAttribute('x',bounds.x.toString());
        this.snapStrawberryBush.node.setAttribute('y', bounds.y.toString());
        this.snapStrawberryBush.node.setAttribute('width', bounds.width.toString());
        this.snapStrawberryBush.node.setAttribute('height', bounds.height.toString());
        this.strawberryBerryPainter.repaint(elapsed)

    }

}