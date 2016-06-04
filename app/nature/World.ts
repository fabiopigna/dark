import {Point} from "../geometry/Point";
import {Size} from "../geometry/Size";
import {IUpdatable} from "./interface/IUpdatable";
import {Sun} from "./Sun";
import {Earth} from "./Earth";
import {Landscape} from "./Landscape";
import {RectangleBounds} from "../geometry/RectangleBounds";
import {Weather} from "./Weather";
export class World implements IUpdatable {

    private width:number;
    private height:number;


    private sun:Sun;
    private earth:Earth;
    private landscape:Landscape;
    private bounds:RectangleBounds;
    private weather:Weather;

    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
        this.bounds = new RectangleBounds(new Point(0, 0), new Size(this.width, this.height));
        this.sun = new Sun(this.getSize());
        this.earth = new Earth(this.getSize());
        this.landscape = new Landscape(this.getSize());
        this.weather = new Weather(this);
    }

    getSize():Size {
        return new Size(this.width, this.height);
    }

    getBounds():RectangleBounds {
        return this.bounds;
    }

    getRandomPoint():Point {
        return new Point(this.width * Math.random(), this.height);
    }

    update(elapsed:number) {
        this.sun.update(elapsed);
        this.earth.update(elapsed);
        this.weather.update(elapsed);
    }

    getSun():Sun {
        return this.sun;
    }

    getEarth():Earth {
        return this.earth;
    }

    getWeather():Weather {
        return this.weather;
    }

    getLandscape():Landscape {
        return this.landscape;
    }
}