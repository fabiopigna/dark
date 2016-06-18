import {IJob} from "./IJob";
import {Collider} from "../../../util/Collider";
import {Human} from "../Human";
import {Field} from "../../vegetable/field/Field";
import {StartJob} from "./StartJob";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export abstract class Job implements IJob {


    human:Human;
    field:Field;
    job:IJob;

    constructor(human:Human, field:Field) {
        this.human = human;
        this.field = field;
        this.job = new StartJob();
    }

    abstract getNewJob(elapsed:number):IJob;

    abstract isCompleted():boolean;

    abstract applyResults(results:number):void;

    abstract getResults():number;

    update(elapsed:number):void {
        if (this.job.isCompleted()) {
            this.applyResults(this.job.getResults());
            this.job = this.getNewJob(elapsed)
        }
        this.job.update(elapsed);

    }


    needToMove():boolean {
        return !Collider.isColliding(this.human.getBounds(), this.field.getBounds());
    }

}