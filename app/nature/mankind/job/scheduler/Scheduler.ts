import {IJob} from "../IJob";
import {IScheduledJob} from "./ISchedulerJob";
import {Human} from "../../Human";
import {IScheduledEndJob} from "./IScheduledEndJob";
import {IScheduler} from "./IScheduler";
/**
 * Created by fabiopigna on 19/06/2016.
 */
export class Scheduler implements IScheduler{

    private scheduledJobs:IScheduledJob[];
    private scheduleIndex:number;
    private completed:boolean;
    private human:Human;
    private scheduleEndJob:IScheduledEndJob;


    constructor(human:Human, scheduledJobs:IScheduledJob[],scheduleEndJob:IScheduledEndJob) {
        this.human = human;
        this.scheduledJobs = scheduledJobs;
        this.scheduleEndJob = scheduleEndJob;
        this.scheduleIndex = 0;
        this.completed = false;
    }

    getNewJob(elapsed:number):IJob {
        if (this.scheduledJobs.length === this.scheduleIndex) {
            this.completed = true;
            return new this.scheduleEndJob.endJobCtor(this.human, this.scheduleEndJob.where, this.scheduleEndJob.result);
        } else {
            let scheduledJob = this.scheduledJobs[this.scheduleIndex];
            if (scheduledJob.conditionCtor) {
                let condition = new scheduledJob.conditionCtor(this.human, scheduledJob.where);
                if (condition.isTrue()) {
                    this.scheduleIndex++;
                    return this.getNewJob(elapsed);
                } else {
                    return new scheduledJob.jobCtor(this.human, scheduledJob.where, elapsed);
                }
            } else {
                this.scheduleIndex++;
                return new scheduledJob.jobCtor(this.human, scheduledJob.where, elapsed);
            }
        }
    }


    isCompleted():boolean {
        return this.completed;
    }

}