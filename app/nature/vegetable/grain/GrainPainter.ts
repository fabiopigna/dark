import {IVegetablePainter} from "../IVegetablePainter";
import {IVegetable} from "../IVegetable";
import {Grain} from "./Grain";
import {Point} from "../../../geometry/Point";
import {IPainter} from "../../interface/IPainter";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export class GrainPlantPainter implements IPainter {


    private snap:Snap.Paper;
    private root:Point;

    constructor(snap:Snap.Paper, root:Point) {
        this.snap = snap;
        this.root = root;
    }

    repaint(elapsed:number) {
    }

    destroy():void {
    }

}


export class GrainPainter implements IVegetablePainter {
    private grain:Grain;
    private grainPlants:GrainPlantPainter[];

    constructor(snap:Snap.Paper, grain:Grain) {
        this.grain = grain;
        this.grainPlants = grain.getBounds().getRandomPoints(12).map((root:Point)=> new GrainPlantPainter(snap, grain,root))
    }

    getVegetable():IVegetable {
        return this.grain;
    }

    repaint(elapsed:number) {
        this.grainPlants.forEach((painter:IPainter)=>painter.repaint(elapsed));
    }

    destroy():void {
        this.grainPlants.forEach((painter:IPainter)=>painter.destroy());
    }

}
