import {Field} from "./Field";
import {IVegetable} from "./IVegetable";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export class FieldConfig {
    minTime:number;
    rageTime:number;
    maxQuantity:number;


    constructor(minTime:number, rageTime:number, maxQuantity:number) {
        this.minTime = minTime;
        this.rageTime = rageTime;
        this.maxQuantity = maxQuantity;
    }

}

