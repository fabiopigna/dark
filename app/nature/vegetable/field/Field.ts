import {CenterLineBounds} from "../../../geometry/CenterLineBounds";
import {FieldLayer} from "./FieldLayer";
import {IUpdatable} from "../../interface/IUpdatable";
import {Earth} from "../../Earth";
import {FieldConfig} from "./FieldConfig";
import {IndexArray} from "../../../util/IndexArray";
import {Weather} from "../../weather/Weather";
import {Point} from "../../../geometry/Point";
import {IVegetable} from "../IVegetable";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class Field implements IUpdatable {
    private bounds:CenterLineBounds;
    private fieldLayers:FieldLayer[];
    private weather:Weather;

    constructor(earth:Earth, weather:Weather, config:FieldConfig) {
        this.weather = weather;
        this.bounds = new CenterLineBounds(earth.getBounds().getTopLine().getRandomPoint(), 0.5 * config.fieldWidth);
        this.fieldLayers = new IndexArray(config.numberOfLayers).map((level)=>new FieldLayer(this, level, config));

    }

    isRaining():boolean {
        return this.weather.isRaining(this.bounds);
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

    canFarm():boolean {
        return this.fieldLayers.some((fieldLayer:FieldLayer)=>fieldLayer.canFarm());
    }

    getCenter():Point {
        return this.bounds.getCenter()
    }

    getRandomVegetableReadyToFarm():IVegetable {
        return this.fieldLayers.reduce((all:IVegetable[], fieldLayer:FieldLayer)=>fieldLayer.getVegetables(), [])
            .filter((vegetable:IVegetable)=>vegetable.canFarm())[0];

    }
}