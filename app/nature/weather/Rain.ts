import {Cloud} from "./Cloud";
import {LineBounds} from "../../geometry/LineBounds";
import {Weather} from "./Weather";
import {IUpdatable} from "../interface/IUpdatable";
import {Point} from "../../geometry/Point";
/**
 * Created by fabiopigna on 04/06/2016.
 */
export class Rain implements IUpdatable {

    private rainBounds:LineBounds[];
    private raining:boolean;

    constructor(weather:Weather, cloud:Cloud) {
        var cloudBounds = cloud.getBounds();
        this.rainBounds = [];
        var rainDistance = 10;
        for (var i = 1; i < Math.floor(cloudBounds.getBottomLine().getLength() / rainDistance); i++) {
            var point0 = new Point(i * rainDistance, cloudBounds.getBottomLine().getCenter().y);
            var point1 = new Point(i * rainDistance, weather.getBounds().height);
            this.rainBounds.push(new LineBounds(point0, point1));
        }

    }

    getBounds():LineBounds[] {
        return this.rainBounds;
    }

    update(elapsed:number) {

    }

    isRaining() {
        return this.raining;
    }

    setRaining(raining:boolean) {
        this.raining = raining;
    }
}
