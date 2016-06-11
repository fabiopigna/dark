import {IVegetable} from "../IVegetable";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface IFieldLayerListener {
    createVegetable(newVegetable:IVegetable):void;
    removeVegetable(vegetable:IVegetable):void;


}