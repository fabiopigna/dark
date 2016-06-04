import {Point} from "./Point";
import {PathBounds} from "./PathBounds";

/**
 * Created by fabiopigna on 02/06/2016.
 */
export class PolygonBounds extends PathBounds {


    constructor(points:Point[]) {
        super(points, true);
    }


}