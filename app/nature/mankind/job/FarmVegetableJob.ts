import {IJob} from "./IJob";
import {Human} from "../Human";
import {Field} from "../../vegetable/field/Field";
import {Collider} from "../../../util/Collider";
import {StartJob} from "./StartJob";
import {WorkOnFieldJob} from "./WorkOnFieldJob";
import {MoveAStepJob} from "./MoveAStepJob";
import {EndJob} from "./EndJob";
import {Job} from "./Job";
import {WorkOnVegetableJob} from "./WorkOnVegetableJob";
import {IVegetable} from "../../vegetable/IVegetable";
import {FieldLayer} from "../../vegetable/field/FieldLayer";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class FarmVegetableJob extends Job {
    private completed:boolean;
    private startedToFarm:boolean;
    private vegetable:IVegetable;

    constructor(human:Human, field:Field) {
        super(human, field);
        this.startedToFarm = false;
        this.completed = false;
        this.vegetable = this.field.getLayers()
            .reduce((all:IVegetable[], layer:FieldLayer)=>all.concat(layer.getVegetables()), [])
            .filter((vegetable:IVegetable)=>vegetable.getLife().isFullGrow())
            [0];
    }


    isCompleted():boolean {
        return this.completed;
    }

    needToMove():boolean {
        return !Collider.isColliding(this.human.getBounds(), this.vegetable.getBounds());
    }

    getNewJob(elapsed:number):IJob {
        if (this.needToMove()) {
            return new MoveAStepJob(this.human, this.vegetable.getBounds().getCenter(), elapsed)
        } else if (!this.startedToFarm) {
            this.startedToFarm = true;
            return new WorkOnVegetableJob(this.human, this.vegetable, elapsed);
        } else {
            this.completed = true;
            return new EndJob();
        }
    }


}