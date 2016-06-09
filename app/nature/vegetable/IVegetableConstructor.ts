import {Field} from "./field/Field";
import {IVegetable} from "./IVegetable";
import {VegetableConfig} from "./VegetableConfig";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface IVegetableConstructor {
    new (field:Field):IVegetable;
}