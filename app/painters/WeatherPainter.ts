import {CloudPainter} from "./CloudPainter";
import {Weather} from "../nature/Weather";
import Paper = Snap.Paper;
import {Cloud} from "../nature/Cloud";
import {IWeatherListener} from "../nature/listeners/IWeatherListener";
import {IPainter} from "../nature/interface/IPainter";
/**
 * Created by fabiopigna on 03/06/2016.
 */

export class WeatherPainter implements IPainter,IWeatherListener {


    private cloudPainters:CloudPainter[];
    private snap:Snap.Paper;

    constructor(snap:Paper, weather:Weather) {
        this.snap = snap;
        this.cloudPainters = weather.getClouds().map((cloud:Cloud)=> {
            return new CloudPainter(snap, cloud);
        });
        weather.addListener(this);
    }

    repaint(elapsed:number) {
        this.cloudPainters.forEach((cloudPainter:CloudPainter)=> {
            cloudPainter.repaint(elapsed)
        });
    }

    cloudCreated(newCloud:Cloud):void {
        this.cloudPainters.push(new CloudPainter(this.snap, newCloud));
    }


    cloudRemoved(cloud:Cloud):void {
        var cloudPainterToRemove = this.cloudPainters.filter((cloudPainter:CloudPainter)=> {
            return cloudPainter.getCloud() === cloud;
        })[0];
        cloudPainterToRemove.destroy();
        this.cloudPainters.remove(cloudPainterToRemove);
    }


    destroy():void {
        this.cloudPainters.forEach((painter:IPainter)=>painter.destroy());
    }
}