import {Percent} from "../../util/Percent";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export class VegetableConfig {
    timeToGrowBase:number;
    timeToGrowPercent:Percent;
    timeToDie:number;

    setTimeToGrowBase(timeToGrowBase:number):VegetableConfig {
        this.timeToGrowBase = timeToGrowBase;
        return this;
    }

    setTimeToGrowPercent(timeToGrowPercent:Percent):VegetableConfig {
        this.timeToGrowPercent = timeToGrowPercent;
        return this;
    }

    setTimeToDie(timeToDie:number):VegetableConfig {
        this.timeToDie = timeToDie;
        return this;
    }

}