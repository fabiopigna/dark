import {Job} from "./Job";
import {Human} from "../Human";
import {Field} from "../../vegetable/field/Field";
import {Collider} from "../../../util/Collider";
import {Delta} from "../../../geometry/Delta";
import {StartJob} from "./StartJob";
import {WorkOnFieldJob} from "./WorkOnFieldJob";
import {MoveAStepJob} from "./MoveAStepJob";
import {EndJob} from "./EndJob";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class FarmJob implements Job {
    private human:Human;
    private field:Field;
    private startTime:number;
    private completed:boolean;
    private job:Job;
    private bad:boolean;

    constructor(human:Human, field:Field, elapsed:number) {
        this.human = human;
        this.field = field;
        this.startTime = elapsed;
        this.bad = true;
        this.job = new StartJob();

    }


    isCompleted():boolean {
        return this.completed;
    }

    update(elapsed:number):void {
        if (this.job.isCompleted()) {
            this.job = this.getNewJob(elapsed)
        }
        this.job.update(elapsed);

    }

    private scheduler = [];


    private getNewJob(elapsed:number):Job {
        if (this.needToMove()) {
            return new MoveAStepJob(this.human, this.field, elapsed)
        } else if (this.needToFarm()) {
            this.bad = false;
            return new WorkOnFieldJob(this.human, this.field, elapsed);
        } else {
            this.completed = true;
            return new EndJob();
        }
    }


    private needToMove():boolean {
        return !Collider.isColliding(this.human.getBounds(), this.field.getBounds());
    }


    private needToFarm() {
        return this.bad;
    }
}