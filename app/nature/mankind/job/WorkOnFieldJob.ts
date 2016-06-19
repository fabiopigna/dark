import {IJob} from "./IJob";
import {Field} from "../../vegetable/field/Field";
import {Human} from "../Human";
import {FieldLayer} from "../../vegetable/field/FieldLayer";
import {IVegetable} from "../../vegetable/IVegetable";
import {IJobResult} from "./IJobResult";
import {JobResult} from "./JobResult";
/**
 * Created by fabiopigna on 14/06/2016.
 */
export class WorkOnFieldJob implements IJob {

    private startTime:number;
    private field:Field;
    private human:Human;
    private vegetables:IVegetable[];
    private VELOCITY:number = 1 / 250;
    private currentIndex:number;
    private harvest:number;


    constructor(human:Human, field:Field, startTime:number) {
        this.human = human;
        this.field = field;
        this.startTime = startTime;
        this.vegetables = this.field.getLayers().reduce((all:IVegetable[], layer:FieldLayer)=>all.concat(layer.getVegetables()), []);
        this.currentIndex = 0;
        this.harvest = 0;
    }

    isCompleted():boolean {
        return this.currentIndex === this.vegetables.length;
    }

    update(elapsed:number):void {
        var time:number = Math.min(this.vegetables.length / this.VELOCITY, (elapsed - this.startTime));
        let delta = Math.floor(time * this.VELOCITY) - this.currentIndex;
        for (let i = 0; i < delta; i++) {
            this.harvest += this.vegetables[this.currentIndex + i].farm();
        }
        this.currentIndex += delta;
    }

    getResult():IJobResult {
        return new JobResult(this.harvest);
    }

    start():void {
    }
}
