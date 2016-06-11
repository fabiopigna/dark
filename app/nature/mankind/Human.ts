import {Earth} from "../Earth";
import {IUpdatable} from "../interface/IUpdatable";
import {HumanLifeConfig} from "./HumanLifeConfig";
import {Life} from "../Life";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class Human implements IUpdatable {

    private earth:Earth;
    private life:Life;

    constructor(earth:Earth, config:HumanLifeConfig) {
        this.earth = earth;
        this.life = new Life(config.timeToGrowBase, config.timeToGrowPercent, config.timeToDie);
    }

    update(elapsed:number):void {
        if (this.life.isGrowing()) {
            this.life.update(elapsed);
        }
    }


}