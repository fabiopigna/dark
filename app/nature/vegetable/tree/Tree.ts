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
    private left:Point;
    private top:Point;
    private right:Point;

    constructor(fieldLayer:FieldLayer, level:number) {
        super(fieldLayer, level, TreeC.VEGETABLE_CONFIG);
        this.left = new Point(this.getRoot().x - this.getLife().normalized() * 0.5 * TreeC.WIDTH, this.getRoot().y - TreeC.DISTANCE_FROM_EARTH);
        this.top = new Point(this.getRoot().x, this.getRoot().y - this.getLife().normalized() * TreeC.MAX_HEIGHT - TreeC.MIN_HEIGHT - TreeC.DISTANCE_FROM_EARTH);
        this.right = new Point(this.getRoot().x + this.getLife().normalized() * 0.5 * TreeC.WIDTH, this.getRoot().y - TreeC.DISTANCE_FROM_EARTH);
        this.bounds = new PolygonBounds([this.left, this.top, this.right])
    }

    update(elapsed:number) {
        if (this.getLife().grow(elapsed, this.isRaining())) {
            this.left.x = this.getRoot().x - this.getLife().normalized() * 0.5 * TreeC.WIDTH;
            this.top.y = this.getRoot().y - this.getLife().normalized() * TreeC.MAX_HEIGHT - TreeC.MIN_HEIGHT - TreeC.DISTANCE_FROM_EARTH;
            this.right.x = this.getRoot().x + this.getLife().normalized() * 0.5 * TreeC.WIDTH;
        }
    }

    getBounds():PolygonBounds {
        return this.bounds;
    }

    isRaining():boolean {
        return this.getFieldLayer().isRaining();
    }

}

