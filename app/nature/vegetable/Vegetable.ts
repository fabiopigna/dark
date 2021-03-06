import {IVegetable} from "./IVegetable";
import {FieldLayer} from "./field/FieldLayer";
import {Life} from "../Life";
import {Point} from "../../geometry/Point";
import {VegetableConfig} from "./VegetableConfig";
import {VegetableLife} from "./VegetableLife";
import {IBounds} from "../../geometry/IBounds";
import {IJobResult} from "../mankind/job/IJobResult";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export abstract class Vegetable implements IVegetable {

    private fieldLayer:FieldLayer;
    private life:VegetableLife;
    private root:Point;
    private level:number;

    constructor(fieldLayer:FieldLayer, level:number, config:VegetableConfig) {
        this.fieldLayer = fieldLayer;
        this.level = level;
        this.root = fieldLayer.getBounds().getRandomPoint();
        this.life = new VegetableLife(config.timeToGrowBase, config.timeToGrowPercent);
    }

    getRoot():Point {
        return this.root;
    }

    getLevel():number {
        return this.level;
    }

    getFieldLayer():FieldLayer {
        return this.fieldLayer;
    }

    getLife():VegetableLife {
        return this.life;
    }

    farm():number {
        return this.life.die();
    }


    canFarm():boolean {
        return this.life.isFullGrow();
    }

    addJobResult(result:IJobResult):void {
    };
    
    abstract update(elapsed:number):void;

    abstract getBounds():IBounds;

}