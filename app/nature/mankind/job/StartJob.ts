import {IJob} from "./IJob";
import {IJobResult} from "./IJobResult";
import {JobResult} from "./JobResult";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class StartJob implements IJob {

    getResult():IJobResult {
        return JobResult.getEmpty();
    }

    isCompleted():boolean {
        return true;
    }

    update(elapsed:number):void {
    }

    start():void {
    }
}