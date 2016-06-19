import {IJob} from "./IJob";
import {Human} from "../Human";
import {Field} from "../../vegetable/field/Field";
import {Delta} from "../../../geometry/Delta";
import {LineBounds} from "../../../geometry/LineBounds";
import {Point} from "../../../geometry/Point";
import {IElement} from "../../interface/IElement";
import {IJobResult} from "./IJobResult";
import {JobResult} from "./JobResult";
/**
 * Created by fabiopigna on 14/06/2016.
 */
export class MoveAStepJob implements IJob {

    private startTime:number;
    private human:Human;
    private TOTAL_DISTANCE:number = 10;
    private TOTAL_TIME:number = 200;
    private MOVING_TIME:number = this.TOTAL_TIME * 0.3;
    private WAITING_TIME:number = this.TOTAL_TIME * 0.7;
    private VELOCITY:number = this.TOTAL_DISTANCE / this.MOVING_TIME;
    private distanceCompleted:number;
    private direction:number;
    private where:IElement;


    constructor(human:Human, where:IElement, startTime:number) {
        this.human = human;
        this.where = where;
        this.startTime = startTime;

    }


    start():void {
        this.distanceCompleted = 0;
        this.direction = this.human.getBounds().getOrigin().x - this.where.getBounds().getOrigin().x > 0 ? -1 : +1;
    }

    isCompleted():boolean {
        return this.distanceCompleted === this.TOTAL_DISTANCE;
    }

    update(elapsed:number):void {
        var time:number = Math.min(this.TOTAL_TIME, (elapsed - this.startTime));
        if (time > this.WAITING_TIME) {
            let distance = (time - this.WAITING_TIME) * this.VELOCITY;
            let deltaX = distance - this.distanceCompleted;
            let delta = new Delta(deltaX * this.direction, 0);
            this.human.getBounds().translate(delta);
            this.distanceCompleted += deltaX;
        }
    }

    getResult():IJobResult {
        return JobResult.getEmpty();
    }
}