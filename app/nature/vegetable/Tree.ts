import {IUpdatable} from "../interface/IUpdatable";
import {Point} from "../../geometry/Point";
import {PolygonBounds} from "../../geometry/PolygonBounds";
import {Forest} from "./Forest";
import {TreeC} from "../constants/NatureConstants"
import {Life} from "../Life";

/**
 * Created by fabiopigna on 02/06/2016.
 */
export class Tree implements IUpdatable {

    private forest:Forest;
    private life:Life;
    private root:Point;
    private bounds:PolygonBounds;
    private left:Point;
    private top:Point;
    private right:Point;

    constructor(forest:Forest) {
        this.forest = forest;
        this.root = forest.getBounds().getRandomPoint();
        this.life = new Life(TreeC.LIFE_TIME_TO_GROW, Infinity);
        this.left = new Point(this.root.x - this.life.normalized() * 0.5 * TreeC.WIDTH, this.root.y - TreeC.DISTANCE_FROM_EARTH);
        this.top = new Point(this.root.x, this.root.y - this.life.normalized() * TreeC.MAX_HEIGHT - TreeC.MIN_HEIGHT - TreeC.DISTANCE_FROM_EARTH);
        this.right = new Point(this.root.x + this.life.normalized() * 0.5 * TreeC.WIDTH, this.root.y - TreeC.DISTANCE_FROM_EARTH);
        this.bounds = new PolygonBounds([this.left, this.top, this.right])
    }

    update(elapsed:number) {
        if (this.life.isGrowing()) {
            this.life.update(elapsed);
            this.left.x = this.root.x - this.life.normalized() * 0.5 * TreeC.WIDTH;
            this.top.y = this.root.y - this.life.normalized() * TreeC.MAX_HEIGHT - TreeC.MIN_HEIGHT - TreeC.DISTANCE_FROM_EARTH;
            this.right.x = this.root.x + this.life.normalized() * 0.5 * TreeC.WIDTH;
        }
    }


    getLifeValue():number {
        return this.life.normalized();
    }

    getBounds():PolygonBounds {
        return this.bounds;
    }

}

