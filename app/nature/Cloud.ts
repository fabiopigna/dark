import {IUpdatable} from "./interface/IUpdatable";
import {Weather} from "./Weather";
import {Point} from "../geometry/Point";
import {Life} from "./Life";
import {CircleBounds} from "../geometry/CircleBounds";
import {LoopLife} from "./LoopLife";
import {RangedValue} from "../geometry/RangedValue";
import {CloudC} from "./constants/NatureConstants";
import {CloudBounds} from "../geometry/CloudBounds";
import {RandomOption} from "../util/RandomOption";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Cloud implements IUpdatable {
    private weather:Weather;
    private point:Point;


    private life:LoopLife;
    private bounds:CloudBounds;
    private randomLife:RandomOption = new RandomOption(CloudC.LIFE_TIME_TO_LOOP, CloudC.LIFE_TIME_TO_LOOP * 0.5);
    private randomWidth:RandomOption = new RandomOption(CloudC.MAX_WIDTH, CloudC.MAX_WIDTH * 0.2);
    private randomHeight:RandomOption = new RandomOption(CloudC.MAX_HEIGHT, CloudC.MAX_HEIGHT * 0.1);
    private rangedX:RangedValue;

    constructor(weather:Weather) {
        this.weather = weather;
        this.point = weather.getBounds().getLeftLine().getRandomPoint();
        this.life = new LoopLife(this.randomLife.getRandom());
        this.rangedX = new RangedValue(weather.getBounds().left(), weather.getBounds().right());
        this.bounds = new CloudBounds(this.point, this.randomWidth.getRandom(), this.randomHeight.getRandom());
    }

    update(elapsed:number) {
        this.life.update(elapsed);
        this.bounds.translateX(this.rangedX.get(this.life.normalized()));

    }

    getBounds():CloudBounds {
        return this.bounds;
    }
}