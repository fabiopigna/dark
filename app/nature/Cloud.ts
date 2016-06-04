import {IUpdatable} from "./interface/IUpdatable";
import {Weather} from "./Weather";
import {Point} from "../geometry/Point";
import {Life} from "./Life";
import {CircleBounds} from "../geometry/CircleBounds";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Cloud implements IUpdatable {
    private weather:Weather;
    private point:Point;
    private life:Life;
    private bounds:CircleBounds;

    constructor(weather:Weather) {
        this.weather = weather;
        this.point = weather.getBounds().getLeftLine().getRandomPoint();
        this.life = new Life(5000, 5000);
        this.bounds = new CircleBounds(this.point, 40);
    }

    update(elapsed:number) {
        this.life.update(elapsed);
        this.point.x = this.life.normalized() * this.weather.getBounds().width;

    }

    getBounds():CircleBounds {
        return this.bounds;
    }
}