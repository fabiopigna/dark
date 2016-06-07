import {IPainter} from "../../nature/interface/IPainter";
import {Strawberry} from "../../nature/vegetable/Strawberry";
import Paper = Snap.Paper;
import {Point} from "../../geometry/Point";
/**
 * Created by fabiopigna on 07/06/2016.
 */


export class StrawberryBerryPainter implements IPainter {
    private strawberry:Strawberry;
    private snapBerries:Snap.Element [];
    private berries:Point[];

    constructor(snap:Paper, strawberry:Strawberry) {
        this.strawberry = strawberry;
        this.berries = strawberry.getBerriesBounds();
        this.snapBerries = this.berries.map((berry:Point)=> {
            return snap.circle(berry.x, berry.y, 0).attr({fill: '#f00'})
        })


    }

    repaint(elapsed:number) {
        if (this.strawberry.getLife().isGrowing()) {
            var normalized = this.strawberry.getLife().normalized();
            var rectangleBounds = this.strawberry.getBounds();
            var width = rectangleBounds.width;
            var height = rectangleBounds.height;

            this.snapBerries.forEach((snapBerry:Snap.Element, index:number)=> {
                var berry = this.berries[index];
                snapBerry.node.setAttribute('cx', ((berry.x -0.5) * width).toFixed(2));
                snapBerry.node.setAttribute('cy', (-berry.y * height).toFixed(2));
                snapBerry.node.setAttribute('r', (3 * normalized).toFixed(2));
            })
        } else if (!this.strawberry.getLife().isGrowing()) {

        }
    }


    destroy():void {
        this.snapBerries.forEach((snapBerry:Snap.Element) => snapBerry.remove());

    }
}
