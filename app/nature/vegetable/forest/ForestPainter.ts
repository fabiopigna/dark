import {TreePainter} from "./tree/TreePainter";
import {Forest} from "./Forest";
import Paper = Snap.Paper;
import {Tree} from "./tree/Tree";
import {IForestLayerListener} from "./IForestLayerListener";
import {IPainter} from "../../interface/IPainter";
import {ForestLayer} from "./ForestLayer";
import {ForestLayerPainter} from "./ForestLayerPainter";
/**
 * Created by fabiopigna on 03/06/2016.
 */

export class ForestPainter implements IPainter {


    private layerPainters:ForestLayerPainter[];
    private snapGroup:Snap.Paper;

    constructor(snap:Paper, forest:Forest) {
        this.snapGroup = snap.g().addClass('forest_g');
        this.layerPainters = forest.getLayers().map((layer:ForestLayer)=> new ForestLayerPainter(this.snapGroup, layer));
    }

    repaint(elapsed:number) {
        this.layerPainters.forEach((painter:IPainter)=> painter.repaint(elapsed));
    }

    destroy():void {
        this.snapGroup.remove();
        this.layerPainters.forEach((painter:IPainter)=>painter.destroy());
    }
}