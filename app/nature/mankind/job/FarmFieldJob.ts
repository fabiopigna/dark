import {IJob} from "./IJob";
import {Human} from "../Human";
import {Field} from "../../vegetable/field/Field";
import {Collider} from "../../../util/Collider";
import {StartJob} from "./StartJob";
import {WorkOnFieldJob} from "./WorkOnFieldJob";
import {MoveAStepJob} from "./MoveAStepJob";
import {EndJob} from "./EndJob";
import {Job} from "./Job";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class FarmFieldJob extends Job {
    private completed:boolean;
    private startedToFarm:boolean;

    constructor(human:Human, field:Field) {
        super(human, field);
        this.startedToFarm = false;
        this.completed = false;
    }


    isCompleted():boolean {
        return this.completed;
    }


    getNewJob(elapsed:number):IJob {
        if (this.needToMove()) {
            return new MoveAStepJob(this.human, this.field.getCenter(), elapsed)
        } else if (!this.startedToFarm) {
            this.startedToFarm = true;
            return new WorkOnFieldJob(this.human, this.field, elapsed);
        } else {
            this.completed = true;
            return new EndJob();
        }
    }
    
    getResults():number {
        return 0;
    }

    applyResults(results:number):void {
    }
}