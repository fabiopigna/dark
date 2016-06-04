import {World} from "./World";
import {RandomTimer} from "../time/RandomTimer";
import {Cloud} from "./Cloud";
import {IWeatherListener} from "./listeners/IWeatherListener";
import {LineBounds} from "../geometry/LineBounds";
import {IForestListener} from "./listeners/IForestListener";
import {RectangleBounds} from "../geometry/RectangleBounds";
import {Size} from "../geometry/Size";
import {CloudC} from "./constants/NatureConstants";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Weather {


    private world:World;
    private clouds:Cloud[];
    private time:RandomTimer = new RandomTimer(2000, 2000);
    private listeners:IWeatherListener[];
    private bounds:RectangleBounds;

    constructor(world:World) {
        this.world = world;
        this.clouds = [];
        this.listeners = [];
        var worldBounds = world.getBounds();
        var origin = worldBounds.getOrigin();
        var size = new Size(worldBounds.width, worldBounds.height * 0.2);
        this.bounds = new RectangleBounds(origin, size).resize(CloudC.MAX_WIDTH, 0);
    }

    getClouds():Cloud[] {
        return this.clouds;
    }

    update(elapsed:number) {
        if (this.time.itsTimeTo(elapsed) && this.clouds.length < 5) {
            var newCloud = new Cloud(this);
            this.clouds.push(newCloud);
            this.listeners.forEach((listener:IWeatherListener)=> {
                listener.cloudCreated(newCloud)
            })
        }
        this.clouds.forEach((cloud:Cloud)=> {
            cloud.update(elapsed)
        });
    }

    getBounds():RectangleBounds {
        return this.bounds;
    }

    addListener(listener:IWeatherListener) {
        this.listeners.push(listener);
    }

}