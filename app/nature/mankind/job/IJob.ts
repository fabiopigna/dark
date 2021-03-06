import {IJobResult} from "./IJobResult";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export interface IJob {

    isCompleted():boolean;
    update(elapsed:number):void;
    getResult():IJobResult;
    start():void;
}