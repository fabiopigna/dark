import {Percent} from "../../util/Percent";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export class VegetableConfig {
    timeToGrowBase:number;
    timeToGrowPercent:Percent;
    timeToDie:number;


    constructor(timeToGrowBase:number, timeToGrowPercent:Percent, timeToDie?:number) {
        this.timeToGrowBase = timeToGrowBase;
        this.timeToGrowPercent = timeToGrowPercent;
        this.timeToDie = timeToDie;
    }
}