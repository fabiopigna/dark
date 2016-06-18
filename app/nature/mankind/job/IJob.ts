/**
 * Created by fabiopigna on 12/06/2016.
 */
export interface IJob {


    isCompleted():boolean;

    update(elapsed:number):void;
    applyResults(results:number):void;
    getResults():number;
}