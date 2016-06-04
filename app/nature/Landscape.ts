import {IUpdatable} from "./interface/IUpdatable";
import {LineBounds} from "../geometry/LineBounds";
import {Size} from "../geometry/Size";
import {Point} from "../geometry/Point";
import {PolygonBounds} from "../geometry/PolygonBounds";
import {RangedValue} from "../geometry/Range";
import {Mountain} from "./Mountain";
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class Landscape implements IUpdatable {


    private bounds:PolygonBounds[];

    constructor(worldSize:Size) {
        var p0 = new Point(0, worldSize.height);
        var p1 = new Point(worldSize.width, worldSize.height);

        var m0 = new Mountain(worldSize.height * 0.7, worldSize.width);
        var points0 = [p0].concat(m0.getPoints()).concat([p1]);

        var m1 = new Mountain(worldSize.height * 0.8, worldSize.width);
        var points1 = [p0].concat(m1.getPoints()).concat([p1]);

        var m2 = new Mountain(worldSize.height * 0.9, worldSize.width);
        var points2 = [p0].concat(m2.getPoints()).concat([p1]);

        this.bounds = [];
        this.bounds.push(new PolygonBounds(points0));
        this.bounds.push(new PolygonBounds(points1));
        this.bounds.push(new PolygonBounds(points2));

    }


    update(elapsed:number) {
    }


    getBounds():PolygonBounds[] {
        return this.bounds
    }
}
