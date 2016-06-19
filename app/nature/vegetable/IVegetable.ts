import {VegetableLife} from "./VegetableLife";
import {IBounds} from "../../geometry/IBounds";
import {IElement} from "../interface/IElement";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface IVegetable extends IElement {

    farm():number;
    canFarm():boolean;
    getLife():VegetableLife;
}