import {IUpdatable} from "./interface/IUpdatable";
import {RectangleBounds} from "../geometry/RectangleBounds";
import {Point} from "../geometry/Point";
import {Size} from "../geometry/Size";
import {Tree} from "./Tree";
import {Forest} from "./Forest";
import {Weather} from "./Weather";
/**
 * Created by fabiopigna on 02/06/2016.
 */
export class Earth implements IUpdatable {


    private bounds:RectangleBounds;
    private forests:Forest[];


    constructor(worldSize:Size, weather:Weather) {
        this.bounds = new RectangleBounds(new Point(0, worldSize.height - 20), new Size(worldSize.width, 20));
        this.forests = [new Forest(this, weather)];

    }

    getBounds():RectangleBounds {
        return this.bounds
    }

    getForests():Forest[] {
        return this.forests;
    }

    update(elapsed:number) {
        this.forests.forEach((forest:Forest)=> {
            forest.update(elapsed)
        });
    }
}
