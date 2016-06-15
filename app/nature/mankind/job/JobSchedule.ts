import {Human} from "../Human";
import {Job} from "./Job";
import {Earth} from "../../Earth";
import {FarmJob} from "./FarmJob";
import {IdleJob} from "./IdleJob";
import {StartJob} from "./StartJob";
/**
 * Created by fabiopigna on 12/06/2016.
 */
export class JobSchedule {

    private human:Human;
    private earth:Earth;

    constructor(earth:Earth, human:Human) {
        this.earth = earth;
        this.human = human;

    }

    getNewJob(elapsed:number):Job {
        if (this.human.getLife().isGrowing()) {
            return new IdleJob(elapsed);
        } else {
            let index = Math.floor(Math.random() * this.earth.getGrainFields().length);
            return new FarmJob(this.human, this.earth.getGrainFields()[index], elapsed);
        }
    }

    getStartJob() {
        return new StartJob();
    }
}