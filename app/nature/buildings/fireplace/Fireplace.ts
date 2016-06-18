import {Earth} from "../../Earth";
import {PolygonBounds} from "../../../geometry/PolygonBounds";
import {FireplaceBounds} from "./FireplaceBounds";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class Fireplace {

    private earth:Earth;
    private bounds:FireplaceBounds;

    constructor(earth:Earth) {
        this.earth = earth;
        this.bounds = new FireplaceBounds(earth.getBounds().getTopLine().getRandomPoint())
    }

    getBounds():FireplaceBounds {
        return this.bounds;
    }

}