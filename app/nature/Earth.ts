import {IUpdatable} from "./interface/IUpdatable";
import {RectangleBounds} from "../geometry/RectangleBounds";
import {Point} from "../geometry/Point";
import {Size} from "../geometry/Size";
import {Weather} from "./Weather";
import {Field} from "./vegetable/field/Field";
import {Strawberry} from "./vegetable/strawberry/Strawberry";
import {FieldConfig} from "./vegetable/field/FieldConfig";
import {Forest} from "./vegetable/Forest";
import {Grain} from "./vegetable/grain/Grain";
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class Earth implements IUpdatable {


    private bounds:RectangleBounds;
    private forests:Forest[];
    private strawberryField:Field[] = [];
    private grainFields:Field[] = [];


    constructor(worldSize:Size, weather:Weather) {
        this.bounds = new RectangleBounds(new Point(0, worldSize.height - 20), new Size(worldSize.width, 20));
        this.forests = [new Forest(this, weather)];
        // this.strawberryField = new Field(this, weather, Strawberry, new FieldConfig(1000, 1000, 5));
        this.grainFields = [];
        this.grainFields.push(new Field(this, weather, Grain, new FieldConfig(1000, 1000, 20)));
        this.grainFields.push(new Field(this, weather, Grain, new FieldConfig(1000, 1000, 20)));
    }


    getBounds():RectangleBounds {
        return this.bounds
    }

    getStrawberryField():Field[] {
        return this.strawberryField;
    }

    getGrainFields():Field[] {
        return this.grainFields;
    }

    getForests():Forest[] {
        return this.forests;
    }

    update(elapsed:number) {
        this.forests.forEach((forest:Forest)=> forest.update(elapsed));
        this.strawberryField.forEach((field:Field)=>field.update(elapsed));
        this.grainFields.forEach((field:Field)=>field.update(elapsed));
    }
}
