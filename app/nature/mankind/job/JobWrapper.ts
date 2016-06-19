import {IJob} from "./IJob";
import {Human} from "../Human";
import {StartJob} from "./StartJob";
import {IJobResult} from "./IJobResult";
import {JobResult} from "./JobResult";
import {SchedulerBuilder} from "./scheduler/SchedulerBuilder";
import {IScheduler} from "./scheduler/IScheduler";
/**
 * Created by fabiopigna on 18/06/2016.
 */

export abstract class JobWrapper implements IJob {

    protected human:Human;
    protected currentJob:IJob;
    protected jobResult:IJobResult;
    private scheduler:IScheduler;

    constructor(human:Human) {
        this.human = human;
        this.currentJob = new StartJob();
        this.jobResult = new JobResult();
    }

    start():void {
        this.scheduler = this.setupScheduler(new SchedulerBuilder(), this.jobResult);
    }

    abstract setupScheduler(schedulerBuilder:SchedulerBuilder, result:IJobResult):IScheduler;


    isCompleted():boolean {
        return this.scheduler.isCompleted();
    }

    getResult():IJobResult {
        return JobResult.getEmpty();
    }

    update(elapsed:number):void {
        if (this.currentJob.isCompleted()) {
            this.jobResult.add(this.currentJob.getResult());
            this.currentJob = this.scheduler.getNewJob(elapsed);
            this.currentJob.start();
        }
        this.currentJob.update(elapsed);

    }

}