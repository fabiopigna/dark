import {IJob} from "./IJob";
import {Fireplace} from "../../buildings/fireplace/Fireplace";
import {Human} from "../Human";
import {Field} from "../../vegetable/field/Field";
import {Job} from "./Job";
import {MoveAStepJob} from "./MoveAStepJob";
import {EndJob} from "./EndJob";
import {WorkOnVegetableJob} from "./WorkOnVegetableJob";
import {IVegetable} from "../../vegetable/IVegetable";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class TimberJob extends Job {
    private fireplace:Fireplace;
    private startedToFarm:boolean;
    private completed;
    private tree:IVegetable;


    constructor(human:Human, fireplace:Fireplace, field:Field) {
        super(human, field);
        this.fireplace = fireplace;
        this.startedToFarm = false;
        this.completed = false;
        this.tree = field.getRandomVegetableReadyToFarm();
    }

    isCompleted():boolean {
        return this.completed;
    }

    getNewJob(elapsed:number):IJob {
        if (this.needToMove()) {
            return new MoveAStepJob(this.human, this.tree.getBounds().getCenter(), elapsed)
        } else if (!this.startedToFarm) {
            this.startedToFarm = true;
            return new WorkOnVegetableJob(this.human, this.tree, elapsed);
        } else {
            this.completed = true;
            return new EndJob();
        }
    }

    applyResults(results:number):void {
        this.fireplace.getLife().addToConsume(results*200);
    }

    getResults():number {
        return 0;
    }
}