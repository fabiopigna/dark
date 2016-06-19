import {Human} from "../../Human";
import {IElement} from "../../../interface/IElement";
import {IConditionConstructor} from "../condition/ICondition";
import {IScheduledJob} from "./ISchedulerJob";
import {IJobConstructor} from "../IJobConstructor";
import {IJobResult} from "../IJobResult";
import {IScheduledEndJob} from "./IScheduledEndJob";
import {IJobEndConstructor} from "../IJobEndConstructor";
import {Scheduler} from "./Scheduler";
import {IScheduler} from "./IScheduler";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class SchedulerBuilder {

    private human:Human;
    private scheduledJobs:IScheduledJob[];
    private scheduleEndJob:IScheduledEndJob;

    constructor() {
        this.scheduledJobs = [];
    }


    start(human:Human):SchedulerBuilder {
        this.human = human;
        return this;
    }

    thenLoop(jobConstructor:IJobConstructor, where:IElement, condition:IConditionConstructor):SchedulerBuilder {
        this.scheduledJobs.push({jobCtor: jobConstructor, where: where, conditionCtor: condition});
        return this;
    }

    thenSingle(jobConstructor:IJobConstructor, where:IElement):SchedulerBuilder {
        this.scheduledJobs.push({jobCtor: jobConstructor, where: where});
        return this;
    }

    end(jobConstructor:IJobEndConstructor, where:IElement, result:IJobResult):IScheduler {
        this.scheduleEndJob = {endJobCtor: jobConstructor, where: where, result: result};
        return new Scheduler(this.human, this.scheduledJobs, this.scheduleEndJob);
    }


}