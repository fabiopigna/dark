import {IVegetable} from "../IVegetable";
import {Field} from "../field/Field";
import {Life} from "../../Life";
import {RandomOption} from "../../../util/RandomOption";
import {Point} from "../../../geometry/Point";
import {StrawberryBounds} from "../../../geometry/StrawberryBounds";
import {StrawberryC} from "../../constants/NatureConstants";
import {Percent} from "../../../util/Percent";
/**
 * Created by fabiopigna on 06/06/2016.
 */

export class Strawberry implements IVegetable {
    private field:Field;
    private life:Life;
    private bounds:StrawberryBounds;
    private root:Point;
    private berriesBounds:Point[];

    constructor(field:Field) {
        this.field = field;
        this.root = field.getBounds().getRandomPoint();
        this.life = new Life(20000, new Percent(0.25) , Infinity);
        this.bounds = new StrawberryBounds(this.root);
        this.berriesBounds = [];

        var partial = 1.0 / 5;
        for (var i = 0; i < 5; i++) {
            this.berriesBounds.push(new Point(partial * i + partial * Math.random(), Math.random()));
        }
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

    getBerriesBounds():Point[] {
        return this.berriesBounds;

    }

    getBounds():StrawberryBounds {
        return this.bounds;
    }
}