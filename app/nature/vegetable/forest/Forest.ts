import {IUpdatable} from "../../interface/IUpdatable";
import {Earth} from "../../Earth";
import {CenterLineBounds} from "../../../geometry/CenterLineBounds";
import {Weather} from "../../Weather";
import {ForestConfig} from "./ForestConfig";
import {ForestLayer} from "./ForestLayer";
import {IndexArray} from "../../../util/IndexArray";

/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Forest implements IUpdatable {

    private earth:Earth;
    private bounds:CenterLineBounds;
    private forestLayers:ForestLayer[];

    constructor(earth:Earth, weather:Weather, config:ForestConfig) {
        this.earth = earth;
        this.bounds = new CenterLineBounds(earth.getBounds().getTopLine().getRandomPoint(), 200);
        this.forestLayers = new IndexArray(config.layers).map((i)=>new ForestLayer(this, i));
    }

    getLayers():ForestLayer[] {
        return this.forestLayers;
    }

    update(elapsed:number) {
        this.forestLayers.forEach((updatable:IUpdatable)=>updatable.update(elapsed));
    }

    getBounds():CenterLineBounds {
        return this.bounds;
    }

}
