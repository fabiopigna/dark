import {IJob} from "./IJob";
import {Field} from "../../vegetable/field/Field";
import {Human} from "../Human";
import {FieldLayer} from "../../vegetable/field/FieldLayer";
import {IVegetable} from "../../vegetable/IVegetable";
/**
 * Created by fabiopigna on 14/06/2016.
 */
export class WorkOnVegetableJob implements IJob {

    private startTime:number;
    private field:Field;
    private human:Human;
    private vegetable:IVegetable;
    private VELOCITY:number = 1 / 5000;
    private harvest:number;
    private completed:boolean;


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
            this.harvest += this.vegetable.farm();
            this.completed = true;

        }
    }

    getHarvest():number {
        return this.harvest;
    }
}