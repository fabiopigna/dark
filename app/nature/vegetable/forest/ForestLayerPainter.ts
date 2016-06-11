import {TreePainter} from "./tree/TreePainter";
import Paper = Snap.Paper;
import {Tree} from "./tree/Tree";
import {IForestLayerListener} from "./IForestLayerListener";
import {IPainter} from "../../interface/IPainter";
import {ForestLayer} from "./ForestLayer";
/**
 * Created by fabiopigna on 03/06/2016.
 */

export class ForestLayerPainter implements IForestLayerListener, IPainter {


    private snapGroup:Snap.Paper;
    private treePainters:TreePainter[];

    constructor(snap:Paper, layer:ForestLayer) {
        this.snapGroup = snap.g().addClass('forest_layer_g');
        this.treePainters = layer.getTrees().map((tree:Tree)=>new TreePainter(this.snapGroup, tree));
        layer.addListener(this);
    }

    repaint(elapsed:number) {
        this.treePainters.forEach((treePainter:TreePainter)=> treePainter.repaint(elapsed));
    }

    treeCreated(newTree:Tree):void {
        this.treePainters.push(new TreePainter(this.snapGroup, newTree));
    }


    destroy():void {
        this.treePainters.forEach((treePainter:TreePainter)=>treePainter.destroy());
    }
}