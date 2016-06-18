import {Point} from "./Point";
import {ICollidableBounds} from "../util/ICollidableBounds";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export interface IBounds extends ICollidableBounds {
    getCenter():Point;
}