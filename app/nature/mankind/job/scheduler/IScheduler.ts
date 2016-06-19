import {IJob} from "../IJob";
/**
 * Created by fabiopigna on 19/06/2016.
 */

export interface IScheduler {

    getNewJob(elapsed:number):IJob;
    isCompleted():boolean;
}