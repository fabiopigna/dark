import {Tree} from "./Tree";
import Paper = Snap.Paper;
import {IVegetablePainter} from "../IVegetablePainter";
import {IVegetable} from "../IVegetable";
import {Color} from "../../../util/Color";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class TreePainter implements IVegetablePainter {
    private tree:Tree;
    private snap:Snap.Paper;
    private path:Snap.Element;

    constructor(snap:Paper, tree:Tree) {
        this.snap = snap;
        this.tree = tree;
        this.path = snap.path().attr({stroke: '#555', fill: new Color(0.2, 0.05).byLevel(tree.getLevel())});
    }

    repaint(elapsed:number) {
        if (this.tree.getLife().isChanged()) {
            this.path.node.setAttribute('d', this.tree.getBounds().toSnapString());
        }
    }

    destroy():void {
        this.path.remove();
    }

    getVegetable():IVegetable {
        return this.tree;
    }
}