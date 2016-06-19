import {Point} from "../../../geometry/Point";
import {PolygonBounds} from "../../../geometry/PolygonBounds";
import {FireplaceC} from "./FireplaceC";
import {Percent} from "../../../util/Percent";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class FireplaceBounds extends PolygonBounds {


    constructor(origin:Point) {
        super(origin, FireplaceBounds.trianglePoints(Percent.valueOf(1.0)));
    }

    private static  trianglePoints(percent:Percent):Point[] {
        let p0 = new Point(-(FireplaceC.MIN_WIDTH + percent.get() * FireplaceC.WIDTH) * 0.5, 0);
        let p1 = new Point(0, -percent.get() * FireplaceC.HEIGHT - FireplaceC.MIN_HEIGHT);
        let p2 = new Point(+(FireplaceC.MIN_WIDTH + percent.get() * FireplaceC.WIDTH) * 0.5 , 0);
        return [p0, p1, p2];
    }

    scale(percent:Percent):void {
        this.setPoints(FireplaceBounds.trianglePoints(percent));
    }

    scaleCopy(percent:Percent):PolygonBounds {
        return new PolygonBounds(this.getOrigin(), FireplaceBounds.trianglePoints(percent));
    }

}

