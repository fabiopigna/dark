import {TreeC} from "./TreeC";
import {Point} from "../../../geometry/Point";
import {PolygonBounds} from "../../../geometry/PolygonBounds";
import {FieldLayer} from "../field/FieldLayer";
import {Vegetable} from "../Vegetable";
import {IUpdatable} from "../../interface/IUpdatable";

/**
 * Created by fabiopigna on 02/06/2016.
 */
export class Tree extends Vegetable {

    private bounds:PolygonBounds;

    constructor(fieldLayer:FieldLayer, level:number) {
        super(fieldLayer, level, TreeC.VEGETABLE_CONFIG);
        var normalized = this.getLife().normalized();
        let left = new Point(-normalized * 0.5 * TreeC.WIDTH, -TreeC.DISTANCE_FROM_EARTH);
        let top = new Point(0, -normalized * TreeC.MAX_HEIGHT - TreeC.MIN_HEIGHT - TreeC.DISTANCE_FROM_EARTH);
        let right = new Point(+normalized * 0.5 * TreeC.WIDTH, -TreeC.DISTANCE_FROM_EARTH);
        this.bounds = new PolygonBounds(this.getRoot(), [right, top, left])
    }

    update(elapsed:number) {
        this.getLife().grow(elapsed, this.isRaining());
        if (this.getLife().isChanged()) {
            var normalized = this.getLife().normalized();
            let [right, top, left] = this.bounds.getPoints();
            right.x = -normalized * 0.5 * TreeC.WIDTH;
            top.y = -normalized * TreeC.MAX_HEIGHT - TreeC.MIN_HEIGHT - TreeC.DISTANCE_FROM_EARTH;
            left.x = +normalized * 0.5 * TreeC.WIDTH;
            this.bounds.setPoints([right, top, left]);
        }
    }

    getBounds():PolygonBounds {
        return this.bounds;
    }

    isRaining():boolean {
        return this.getFieldLayer().isRaining();
    }

}

