import {IJob} from "./IJob";
import {Human} from "../Human";
import {IVegetable} from "../../vegetable/IVegetable";
import {IJobResult} from "./IJobResult";
import {JobResult} from "./JobResult";
/**
 * Created by fabiopigna on 14/06/2016.
 */
export class WorkOnVegetableJob implements IJob {

    private startTime:number;
    private human:Human;
    private vegetable:IVegetable;
    private VELOCITY:number = 1 / 5000;
    private harvest:number;
    private completed:boolean;
    private HARVEST_TOTAL:number = 200;

    constructor(human:Human, vegetable:IVegetable, startTime:number) {
        this.human = human;
        this.vegetable = vegetable;
        this.startTime = startTime;
        this.completed = false;
        this.harvest = 0;
    }

    isCompleted():boolean {
        return this.completed;
    }

    update(elapsed:number):void {
        var progress:number = Math.min(1.0, this.VELOCITY * (elapsed - this.startTime));
        if (progress === 1.0) {
            this.harvest += this.HARVEST_TOTAL * this.vegetable.farm();
            this.completed = true;

        }
    }

    getResult():IJobResult {
        return new JobResult(this.harvest);
    }

    start():void {
    }
}