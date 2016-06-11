import {Percent} from "../../util/Percent";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export class HumanLifeConfig {
    timeToGrowBase:number;
    timeToGrowPercent:Percent;
    timeToDie:number;

    setTimeToGrowBase(timeToGrowBase:number):HumanLifeConfig {
        this.timeToGrowBase = timeToGrowBase;
        return this;
    }

    setTimeToGrowPercent(timeToGrowPercent:Percent):HumanLifeConfig {
        this.timeToGrowPercent = timeToGrowPercent;
        return this;
    }

    setTimeToDie(timeToDie:number):HumanLifeConfig {
        this.timeToDie = timeToDie;
        return this;
    }

}