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

    constructor(snap:Snap.Paper, grain:Grain) {
        this.grain = grain;
        this.snapGrain = snap.path().attr({stroke:new Color(0.7, 0.1).byLevel(grain.getLevel())});
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
