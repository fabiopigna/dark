import {Human} from "../Human";
import {JobWrapper} from "./JobWrapper";
import {MoveAStepJob} from "./MoveAStepJob";
import {WorkOnVegetableJob} from "./WorkOnVegetableJob";
import {CloseToCondition} from "./condition/CloseToCondition";
import {EndJob} from "./EndJob";
import {IVegetable} from "../../vegetable/IVegetable";
import {SchedulerBuilder} from "./scheduler/SchedulerBuilder";
import {IScheduler} from "./scheduler/IScheduler";
import {IJobResult} from "./IJobResult";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class FarmVegetableJob extends JobWrapper {

    private vegetable:IVegetable;

    constructor(human:Human, vegetable:IVegetable) {
        super(human);
        this.vegetable = vegetable;

    }

    setupScheduler(schedulerBuilder:SchedulerBuilder, jobResult:IJobResult):IScheduler {
        return schedulerBuilder
            .start(this.human)
            .thenLoop(MoveAStepJob, this.vegetable, CloseToCondition)
            .thenSingle(WorkOnVegetableJob, this.vegetable)
            .thenLoop(MoveAStepJob, this.human.getHome(), CloseToCondition)
            .end(EndJob, this.human.getHome(), jobResult);
    }


}




