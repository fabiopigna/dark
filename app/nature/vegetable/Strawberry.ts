import {IVegetable} from "./IVegetable";
import {Field} from "./Field";
import {Life} from "../Life";
import {RandomOption} from "../../util/RandomOption";
import {Point} from "../../geometry/Point";
import {StrawberryBounds} from "../../geometry/StrawberryBounds";
/**
 * Created by fabiopigna on 06/06/2016.
 */

export class Strawberry implements IVegetable {
    private field:Field;
    private life:Life;
    private randomLife:RandomOption = new RandomOption(10000, 5000);
    private bounds:StrawberryBounds;
    private root:Point;

    constructor(field:Field) {
        this.field = field;
        this.root = field.getBounds().getRandomPoint();
        this.life = new Life(this.randomLife.getRandom());
        this.bounds = new StrawberryBounds(this.root);
    }

    getLife():Life {
        return this.life;
    }

    update(elapsed:number) {
        if (this.life.isGrowing()) {
            this.life.update(elapsed);
            this.bounds.update(this.life.normalized());
        }


    }

    getBounds():StrawberryBounds {
        return this.bounds;
    }
}