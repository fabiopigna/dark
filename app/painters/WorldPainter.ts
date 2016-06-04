import Paper = Snap.Paper;
import {World} from "../nature/World";
import {IPainter} from "../nature/interface/IPainter";
import {SunPainter} from "./SunPainter";
import {EarthPainter} from "./EarthPainter";
import {LandscapePainter} from "./LandscapePainter";
import {WeatherPainter} from "./WeatherPainter";
/**
 * Created by fabiopigna on 02/06/2016.
 */


export class WorldPainter implements IPainter {
    private world:World;
    private snap:Snap.Paper;
    private earthPainter:EarthPainter;
    private sunPainter:SunPainter;
    private landscapePainter:LandscapePainter;
    private weatherPainter:WeatherPainter;

    constructor(snap:Paper, world:World) {
        this.snap = snap;
        this.world = world;

        this.sunPainter = new SunPainter(snap.g(), world.getSun());
        this.landscapePainter = new LandscapePainter(snap.g(), world.getLandscape());
        this.weatherPainter = new WeatherPainter(snap.g(), world.getWeather());
        this.earthPainter = new EarthPainter(snap, world.getEarth());
        this.prepare()
    }

    private prepare() {
        this.snap.attr(this.world.getSize().toJson());

    }


    public repaint(elapsed:number) {

        this.earthPainter.repaint(elapsed);
        this.sunPainter.repaint(elapsed);
    }

}