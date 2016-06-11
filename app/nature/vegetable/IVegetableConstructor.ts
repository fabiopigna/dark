import {FieldLayer} from "./field/FieldLayer";
import {IVegetable} from "./IVegetable";
import {VegetableConfig} from "./VegetableConfig";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface IVegetableConstructor {
    new (field:FieldLayer, level:number):IVegetable;
}