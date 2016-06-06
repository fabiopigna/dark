import {IPainter} from "../../nature/interface/IPainter";
import {IVegetable} from "../../nature/vegetable/IVegetable";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface IVegetablePainter extends IPainter {
    getVegetable():IVegetable;
    destroy():void;
}