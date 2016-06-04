import {Point} from "./geometry/Point";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export abstract class PointProvider {

    abstract getPoints():Point[];
}