import {IVegetablePainter} from "../IVegetablePainter";
import {IVegetable} from "../IVegetable";
import {Grain} from "./Grain";
import {Color} from "../../../util/Color";

/**
 * Created by fabiopigna on 08/06/2016.
 */

export class GrainPainter implements IVegetablePainter {
    private grain:Grain;
    private snapGrain:Snap.Element;
    private snapGroup:Snap.Paper;

    constructor(snap:Snap.Paper, grain:Grain) {
        this.grain = grain;
        this.snapGroup = snap.g();
        this.snapGrain = this.snapGroup.path().attr({stroke: this.getColor()});
        this.snapGroup.node.setAttribute('transform', 'translate(' + grain.getBounds().getOrigin().x + ' ' + grain.getBounds().getOrigin().y + ')');

    }

    private getColor():string {
        return new Color(0.7, 0.1).byLevel(this.grain.getLevel()).toString();
    }

    getVegetable():IVegetable {
        return this.grain;
    }

    repaint(elapsed:number) {
        this.snapGrain.node.setAttribute('d', this.grain.getBounds().toSnapString())
    }

    destroy():void {
        this.snapGrain.remove();
    }

}
