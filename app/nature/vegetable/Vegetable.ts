import {IVegetable} from "./IVegetable";
import {Field} from "./field/Field";
import {Life} from "../Life";
import {Point} from "../../geometry/Point";
import {VegetableConfig} from "./VegetableConfig";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export abstract class Vegetable implements IVegetable {

    private field:Field;
    private life:Life;
    private root:Point;

    constructor(field:Field, config:VegetableConfig) {
        this.field = field;
        this.root = field.getBounds().getRandomPoint();
        this.life = new Life(config.timeToGrowBase, config.timeToGrowPercent, config.timeToDie);
    }

    getRoot():Point {
        return this.root;
    }


    getField():Field {
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
}