import {IJob} from "./IJob";
import {Human} from "../Human";
import {Field} from "../../vegetable/field/Field";
import {Collider} from "../../../util/Collider";
import {StartJob} from "./StartJob";
import {WorkOnFieldJob} from "./WorkOnFieldJob";
import {MoveAStepJob} from "./MoveAStepJob";
import {EndJob} from "./EndJob";
import {JobWrapper} from "./JobWrapper";
import {CloseToCondition} from "./condition/CloseToCondition";
import {SchedulerBuilder} from "./scheduler/SchedulerBuilder";
import {IScheduler} from "./scheduler/IScheduler";
import {IJobResult} from "./IJobResult";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class FarmFieldJob extends JobWrapper {
    private field:Field;

    constructor(human:Human, field:Field) {
        super(human);
        this.field = field;
    }

    setupScheduler(schedulerBuilder:SchedulerBuilder, jobResult:IJobResult):IScheduler {
        return schedulerBuilder
            .start(this.human)
            .thenLoop(MoveAStepJob, this.field, CloseToCondition)
            .thenSingle(WorkOnFieldJob, this.field)
            .thenLoop(MoveAStepJob, this.human.getHome(), CloseToCondition)
            .end(EndJob, this.human.getHome(), jobResult);
    }
}