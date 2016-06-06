import {Field} from "./Field";
import {IVegetable} from "./IVegetable";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface IVegetableConstructor {
    new (field:Field):IVegetable;
}