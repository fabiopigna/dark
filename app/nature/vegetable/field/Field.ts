import {CenterLineBounds} from "../../../geometry/CenterLineBounds";
import {FieldLayer} from "./FieldLayer";
import {IUpdatable} from "../../interface/IUpdatable";
import {Earth} from "../../Earth";
import {FieldConfig} from "./FieldConfig";
import {IndexArray} from "../../../util/IndexArray";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class Field implements IUpdatable {
    private bounds:CenterLineBounds;
    private fieldLayers:FieldLayer[];

    constructor(earth:Earth, config:FieldConfig) {
        this.bounds = new CenterLineBounds(earth.getBounds().getTopLine().getRandomPoint(), 0.5*config.fieldWidth);
        this.fieldLayers = new IndexArray(config.numberOfLayers).map((level)=>new FieldLayer(this, level, config));

    }

    getBounds():CenterLineBounds {
        return this.bounds;
    }

    getLayers():FieldLayer[] {
        return this.fieldLayers;
    }

    update(elapsed:number) {
        this.fieldLayers.forEach((updatable:IUpdatable)=>updatable.update(elapsed));
    }

}