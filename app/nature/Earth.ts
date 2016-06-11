import {IUpdatable} from "./interface/IUpdatable";
import {RectangleBounds} from "../geometry/RectangleBounds";
import {Point} from "../geometry/Point";
import {Size} from "../geometry/Size";
import {Weather} from "./Weather";
import {Field} from "./vegetable/field/Field";
import {GrainC} from "./vegetable/grain/GrainC";
import {TreeC} from "./vegetable/tree/TreeC";
import {Human} from "./mankind/Human";
import {HumanC} from "./mankind/HumanC";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class Earth implements IUpdatable {


    private bounds:RectangleBounds;
    private treeFields:Field[];
    private strawberryField:Field[] = [];
    private grainFields:Field[] = [];
    private humans:Human[];


    constructor(worldSize:Size, weather:Weather) {
        this.bounds = new RectangleBounds(new Point(0, worldSize.height - 20), new Size(worldSize.width, 20));

        this.treeFields = [];
        this.treeFields.push(new Field(this, TreeC.FIELD_CONFIG));

        this.grainFields = [];
        this.grainFields.push(new Field(this, GrainC.FIELD_CONFIG));
        this.grainFields.push(new Field(this, GrainC.FIELD_CONFIG));
        
        this.humans = [new Human(this, HumanC.LIFE_CONFIG)];
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

    getTreeFields():Field[] {
        return this.treeFields;
    }

    getHumans():Human[]{
        return this.humans;
    }

    update(elapsed:number) {
        this.treeFields.forEach((field:Field)=>field.update(elapsed));
        this.strawberryField.forEach((field:Field)=>field.update(elapsed));
        this.grainFields.forEach((field:Field)=>field.update(elapsed));
        this.humans.forEach((human:Human)=>human.update(elapsed));
    }
}
