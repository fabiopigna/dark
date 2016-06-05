import {IPainter} from "../nature/interface/IPainter";
import {Tree} from "../nature/Tree";
import Paper = Snap.Paper;
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class TreePainter implements IPainter {
    private tree:Tree;
    private snap:Snap.Paper;
    private path:Snap.Element;

    constructor(snap:Paper, tree:Tree) {
        this.snap = snap;
        this.tree = tree;
        this.path = snap.path().attr({stroke: '#bbb'});
    }

    repaint(elapsed:number) {
        this.path.node.setAttribute('d', this.tree.getBounds().toSnapString());
    }


}