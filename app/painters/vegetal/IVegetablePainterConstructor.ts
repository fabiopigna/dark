import {IVegetable} from "../../nature/vegetable/IVegetable";
import {IVegetablePainter} from "./IVegetablePainter";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface IVegetablePainterConstructor {
    new (snap:Snap.Paper, vegetable:IVegetable):IVegetablePainter;
}