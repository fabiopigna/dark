import {IJob} from "./IJob";
import {Fireplace} from "../../buildings/fireplace/Fireplace";
import {Human} from "../Human";
import {Field} from "../../vegetable/field/Field";
import {StartJob} from "./StartJob";
import {Job} from "./Job";
import {MoveAStepJob} from "./MoveAStepJob";
import {WorkOnFieldJob} from "./WorkOnFieldJob";
import {EndJob} from "./EndJob";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class TimberJob extends Job {
    private fireplace:Fireplace;
    private startedToFarm:boolean;
    private completed;


    constructor(human:Human, fireplace:Fireplace, field:Field) {
        super(human, field);
        this.fireplace = fireplace;
        this.startedToFarm = false;
        this.completed = false;
    }

    isCompleted():boolean {
        return this.completed;
    }


    getNewJob(elapsed:number):IJob {
        if (this.needToMove()) {
            return new MoveAStepJob(this.human, this.field, elapsed)
        } else if (!this.startedToFarm) {
            this.startedToFarm = true;
            return new WorkOnFieldJob(this.human, this.field, elapsed);
        } else {
            this.completed = true;
            return new EndJob();
        }
    }

}