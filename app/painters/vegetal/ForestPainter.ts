import {TreePainter} from "./TreePainter";
import {Forest} from "../../nature/vegetable/Forest";
import Paper = Snap.Paper;
import {Tree} from "../../nature/vegetable/Tree";
import {IForestListener} from "../../nature/listeners/IForestListener";
/**
 * Created by fabiopigna on 03/06/2016.
 */

export class ForestPainter implements IForestListener {


    private treePainters:TreePainter[];
    private snap:Snap.Paper;

    constructor(snap:Paper, forest:Forest) {
        this.snap = snap;
        this.treePainters = forest.getTrees().map((tree:Tree)=> {
            return new TreePainter(snap, tree);
        });
        forest.addListener(this);
    }

    repaint(elapsed:number) {
        this.treePainters.forEach((treePainter:TreePainter)=> {
            treePainter.repaint(elapsed)
        });
    }

    treeCreated(newTree:Tree):void {
        this.treePainters.push(new TreePainter(this.snap, newTree));
    }


}