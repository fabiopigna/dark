import {IJobResult} from "./IJobResult";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class JobResult implements IJobResult {

    private value:number;
    private static empty = new JobResult(0);

    constructor(value:number = 0) {
        this.value = value;
    }

    add(result:IJobResult) {
        this.value += result.getValue();
    }


    getValue():number {
        return this.value;
    }

    static getEmpty():JobResult {
        return JobResult.empty;
    }
}