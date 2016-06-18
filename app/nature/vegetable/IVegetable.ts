import {IUpdatable} from "../interface/IUpdatable";
import {ILiveable} from "../interface/ILiveable";
import {VegetableLife} from "./VegetableLife";
import {PolygonBounds} from "../../geometry/PolygonBounds";
import {ICollidableBounds} from "../../util/ICollidableBounds";
import {IBounds} from "../../geometry/IBounds";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface IVegetable extends IUpdatable {

    farm():number;
    canFarm():boolean;
    getLife():VegetableLife;
    getBounds():IBounds;
}