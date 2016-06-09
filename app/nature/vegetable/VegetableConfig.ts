import {Percent} from "../../util/Percent";
/**
 * Created by fabiopigna on 08/06/2016.
 */
export class VegetableConfig {
    timeToGrowBase:number;
    timeToGrowPercent:Percent;


    constructor(timeToGrowBase:number, timeToGrowPercent:Percent) {
        this.timeToGrowBase = timeToGrowBase;
        this.timeToGrowPercent = timeToGrowPercent;
    }
}