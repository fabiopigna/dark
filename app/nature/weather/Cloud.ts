import {IUpdatable} from "../interface/IUpdatable";
import {Weather} from "./Weather";
import {Point} from "../../geometry/Point";
import {Life} from "../Life";
import {RangedValue} from "../../geometry/RangedValue";
import {CloudBounds} from "./CloudBounds";
import {RandomOption} from "../../util/RandomOption";
import {Rain} from "./Rain";
import {ICloudListener} from "./ICloudListener";
import {ILiveable} from "../interface/ILiveable";
import {ICollidable} from "../interface/ICollidable";
import {Percent} from "../../util/Percent";
import {LineBounds} from "../../geometry/LineBounds";
import {CloudC} from "./CloudC";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Cloud implements IUpdatable,ICollidable,ILiveable {


    private weather:Weather;
    private rain:Rain;
    private point:Point;
    private life:Life;
    private bounds:CloudBounds;
    private randomWidth:RandomOption = new RandomOption(CloudC.MAX_WIDTH, CloudC.MAX_WIDTH * 0.2);
    private randomHeight:RandomOption = new RandomOption(CloudC.MAX_HEIGHT, CloudC.MAX_HEIGHT * 0.1);
    private rangedX:RangedValue;
    private raining:boolean;

    private listeners:ICloudListener[];

    constructor(weather:Weather) {
        this.weather = weather;
        this.point = weather.getBounds().getLeftLine().getRandomPoint(new RandomOption(0.1, 0.1));
        this.life = new Life(CloudC.LIFE_TIME_TO_LOOP, new Percent(0.5));
        this.rangedX = new RangedValue(weather.getBounds().left(), weather.getBounds().right());
        this.bounds = new CloudBounds(this.point, this.randomWidth.getRandom(), this.randomHeight.getRandom());
        this.rain = new Rain(weather, this);
        this.listeners = [];
    }

    update(elapsed:number) {
        this.life.update(elapsed);
        this.bounds.translateX(this.rangedX.get(this.life.normalized()));
        this.rain.update(elapsed);
    }

    getBounds():CloudBounds {
        return this.bounds;
    }

    getRain():Rain {
        return this.rain;
    }

    startCollide() {
        this.rain.setRaining(true);
        this.raining = true;
        this.listeners.forEach((listener:ICloudListener)=> {
            listener.startRain();
        })
    }

    stopCollide() {
        this.rain.setRaining(false);
        this.raining = false;
        this.listeners.forEach((listener:ICloudListener)=> {
            listener.stopRain();
        })
    }

    isCollide():boolean {
        return this.rain.isRaining();
    }

    getBoundsCollidable():SAT.Polygon {
        return this.bounds.toSAT();
    }

    addListener(listener:ICloudListener) {
        this.listeners.push(listener);
    }

    getLife():Life {
        return this.life;
    }

    removeListener(listener:ICloudListener) {
        this.listeners.remove(listener);
    }

    isRaining():boolean {
        return this.raining
    }

    isOver(bounds:LineBounds):boolean {
        return this.bounds.isOver(bounds);
    }
}
