import {Job} from "./Job";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class StartJob implements Job {

    isCompleted():boolean {
        return true;
    }

    update(elapsed:number):void {
    }
}