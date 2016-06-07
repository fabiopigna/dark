import {CurveBounds} from "./CurveBounds";
import {Point} from "./Point";
import {StrawberryC}  from "../nature/constants/NatureConstants";
import {RectangleBounds} from "./RectangleBounds";
import {Size} from "./Size";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export class StrawberryBounds extends RectangleBounds {

    private root:Point;


    constructor(origin:Point) {
        super(new Point(0 , 0), new Size(0, 0));
        this.root = origin;
    }

    update(lifeNormalized:number) {
        this.x =  - 0.5 * lifeNormalized * StrawberryC.MAX_WIDTH;
        this.y =  -  lifeNormalized * StrawberryC.MAX_HEIGHT;
        this.width =  lifeNormalized * StrawberryC.MAX_WIDTH;
        this.height =  lifeNormalized * StrawberryC.MAX_HEIGHT;
    }


    getOrigin():Point {
        return this.root;
    }
}