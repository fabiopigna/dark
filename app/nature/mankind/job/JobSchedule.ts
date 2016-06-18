import {Human} from "../Human";
import {IJob} from "./IJob";
import {Earth} from "../../Earth";
import {FarmFieldJob} from "./FarmFieldJob";
import {IdleJob} from "./IdleJob";
import {StartJob} from "./StartJob";
import {Field} from "../../vegetable/field/Field";
import {TimberJob} from "./TimberJob";
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

    getNewJob(elapsed:number):IJob {
        if (this.human.getLife().isGrowing()) {
            return new IdleJob(elapsed);
        } else if (this.needToTimber(this.human)) {
            return new TimberJob(this.human, this.earth.getFireplaces()[0], this.earth.getTreeFields()[0]);
        } else if (this.needToFarm(this.human, this.earth.getGrainFields())) {
            let index = Math.floor(Math.random() * this.earth.getGrainFields().length);
            return new FarmFieldJob(this.human, this.earth.getGrainFields()[index]);
        } else {
            return new IdleJob(elapsed);
        }
    }

    getStartJob() {
        return new StartJob();
    }

    private needToFarm(human:Human, grainFields:Field[]):boolean {
        return grainFields.some((grainField:Field)=>grainField.canFarm());


    }

    private needToTimber(human:Human) {
        var woodNeeded = this.earth.getFireplaces()[0].getLife().needToConsume();
        var woodReady = this.earth.getTreeFields()[0].canFarm();
        return woodNeeded && woodReady;
    }
}