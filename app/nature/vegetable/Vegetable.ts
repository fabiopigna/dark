import {IVegetable} from "./IVegetable";
import {FieldLayer} from "./field/FieldLayer";
import {Life} from "../Life";
import {Point} from "../../geometry/Point";
import {VegetableConfig} from "./VegetableConfig";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export abstract class Vegetable implements IVegetable {

    private field:FieldLayer;
    private life:Life;
    private root:Point;
    private level:number;

    constructor(field:FieldLayer, level:number, config:VegetableConfig) {
        this.field = field;
        this.level = level;
        this.root = field.getBounds().getRandomPoint();
        this.life = new Life(config.timeToGrowBase, config.timeToGrowPercent, config.timeToDie);
    }

    getRoot():Point {
        return this.root;
    }

    getLevel():number {
        return this.level;
    }

    getField():FieldLayer {
        return this.field;
    }

    update(elapsed:number) {
        if (this.life.isGrowing()) {
            this.life.update(elapsed);
        }
    }

    getLife():Life {
        return this.life;
    }

    harvest():number {
        return this.life.die();
    }
}