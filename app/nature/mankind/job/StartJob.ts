import {IJob} from "./IJob";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class StartJob implements IJob {

    isCompleted():boolean {
        return true;
    }

    update(elapsed:number):void {
    }
}