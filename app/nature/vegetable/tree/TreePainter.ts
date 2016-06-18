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
    private path:Snap.Element;
    private snapGroup:Snap.Paper;

    constructor(snap:Paper, tree:Tree) {
        this.tree = tree;
        this.snapGroup = snap.g().addClass('tree_g');
        this.snapGroup.node.setAttribute('transform', 'translate(' + tree.getBounds().getOrigin().x + ' ' + tree.getBounds().getOrigin().y + ')');
        this.path = this.snapGroup.path().attr({stroke: '#555', fill: new Color(0.2, 0.05).byLevel(tree.getLevel())});
    }

    repaint(elapsed:number) {
        if (this.tree.getLife().isChanged()) {
            this.path.node.setAttribute('d', this.tree.getBounds().toSnapString());
        }
    }

    destroy():void {
        this.snapGroup.remove();
    }

    getVegetable():IVegetable {
        return this.tree;
    }
}