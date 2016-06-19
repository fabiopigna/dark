import {IJob} from "./IJob";
import {IJobResult} from "./IJobResult";
import {Human} from "../Human";
import {IElement} from "../../interface/IElement";
import {JobResult} from "./JobResult";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class EndJob implements IJob {
    private completed:boolean;
    private result:IJobResult;
    private element:IElement;

    constructor(human:Human, element:IElement, result:IJobResult) {
        this.element = element;
        this.result = result;
        this.completed = false;
    }

    start():void {
    }

    getResult():IJobResult {
        return JobResult.getEmpty();
    }

    isCompleted():boolean {
        return this.completed;
    }

    update(elapsed:number):void {
        this.element.addJobResult(this.result);
        this.completed = true;
    }

}