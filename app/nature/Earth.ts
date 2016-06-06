import {IUpdatable} from "./interface/IUpdatable";
import {RectangleBounds} from "../geometry/RectangleBounds";
import {Point} from "../geometry/Point";
import {Size} from "../geometry/Size";
import {Weather} from "./Weather";
import {Field} from "./vegetable/Field";
import {Strawberry} from "./vegetable/Strawberry";
import {FieldConfig} from "./vegetable/FieldConfig";
import {Forest} from "./vegetable/Forest";
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class Earth implements IUpdatable {


    private bounds:RectangleBounds;
    private forests:Forest[];
    private strawberryField:Field;


    constructor(worldSize:Size, weather:Weather) {
        this.bounds = new RectangleBounds(new Point(0, worldSize.height - 20), new Size(worldSize.width, 20));
        this.forests = [new Forest(this, weather)];
        this.strawberryField = new Field(this, weather, Strawberry, new FieldConfig(1000, 1000, 5));

    }


    getBounds():RectangleBounds {
        return this.bounds
    }

    getStrawberryField():Field {
        return this.strawberryField;
    }

    getForests():Forest[] {
        return this.forests;
    }

    update(elapsed:number) {
        this.forests.forEach((forest:Forest)=> {
            forest.update(elapsed)
        });
        this.strawberryField.update(elapsed);
    }
}
