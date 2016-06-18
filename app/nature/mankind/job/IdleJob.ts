import {IJob} from "./IJob";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class IdleJob implements IJob {

    private completed:boolean;
    private startTime:number;
    static MIN_DURATION:number = 2000;

    constructor(elaped:number) {
        this.startTime = elaped;
    }

    isCompleted():boolean {
        return this.completed;
    }

    update(elapsed:number):void {
        this.completed = elapsed - this.startTime > IdleJob.MIN_DURATION;
    }


    applyResults(results:number):void {
    }

    getResults():number {
        return 0;
    }
}