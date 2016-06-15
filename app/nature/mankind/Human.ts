import {Earth} from "../Earth";
import {IUpdatable} from "../interface/IUpdatable";
import {HumanLifeConfig} from "./HumanLifeConfig";
import {Life} from "../Life";
import {HumanBounds} from "./HumanBounds";
import {JobSchedule} from "./job/JobSchedule";
import {Job} from "./job/Job";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class Human implements IUpdatable {

    private earth:Earth;
    private life:Life;
    private bounds:HumanBounds;
    private jobSchedule:JobSchedule;
    private job:Job;

    constructor(earth:Earth, config:HumanLifeConfig) {
        this.earth = earth;
        this.life = new Life(config.timeToGrowBase, config.timeToGrowPercent, config.timeToDie);
        this.bounds = new HumanBounds(earth.getBounds().getTopLine().getRandomPoint());
        this.jobSchedule = new JobSchedule(earth, this);
        this.job = this.jobSchedule.getStartJob();
    }

    update(elapsed:number):void {
        if (this.life.isGrowing()) {
            this.life.update(elapsed);
        }
        if (this.life.isDead()) {
            //so long world
        } else {
            if (this.job.isCompleted()) {
                this.job = this.jobSchedule.getNewJob(elapsed);
            }
            this.job.update(elapsed);
        }
    }

    getLife():Life {
        return this.life;
    }

    getBounds():HumanBounds {
        return this.bounds;
    }

}