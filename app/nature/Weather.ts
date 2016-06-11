import {World} from "./World";
import {RandomTimer} from "../time/RandomTimer";
import {Cloud} from "./Cloud";
import {IWeatherListener} from "./listeners/IWeatherListener";
import {RectangleBounds} from "../geometry/RectangleBounds";
import {CloudC} from "./constants/NatureConstants";
import {Collider} from "../util/Collider";
import {Death} from "./Death";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Weather {


    private world:World;
    private clouds:Cloud[];
    private time:RandomTimer = new RandomTimer(2000, 2000);
    private listeners:IWeatherListener[];
    private bounds:RectangleBounds;
    private death:Death<Cloud>;

    constructor(world:World) {
        this.world = world;
        this.death = new Death<Cloud>();
        this.clouds = [];
        this.listeners = [];
        var worldBounds = world.getBounds();
        var origin = worldBounds.getOrigin();
        this.bounds = new RectangleBounds(origin, world.getSize()).resize(CloudC.MAX_WIDTH, 0);
    }

    getClouds():Cloud[] {
        return this.clouds;
    }

    update(elapsed:number) {
        if (this.time.itsTimeTo(elapsed) && this.clouds.length < 10) {
            var newCloud = new Cloud(this);
            this.clouds.push(newCloud);
            this.listeners.forEach((listener:IWeatherListener)=> {
                listener.cloudCreated(newCloud)
            })
        }
        this.clouds.forEach((cloud:Cloud)=> {
            cloud.update(elapsed);
        });
        this.death.doYourJob(this.clouds).forEach((cloud:Cloud)=> {
            this.listeners.forEach((listener:IWeatherListener)=> {
                listener.cloudRemoved(cloud)
            })
        });
        Collider.check(this.clouds);
    }

    getBounds():RectangleBounds {
        return this.bounds;
    }

    addListener(listener:IWeatherListener) {
        this.listeners.push(listener);
    }

}