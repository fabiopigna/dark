import {IPainter} from "../interface/IPainter";
import {IVegetable} from "./IVegetable";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface IVegetablePainter extends IPainter {
    getVegetable():IVegetable;
 
}