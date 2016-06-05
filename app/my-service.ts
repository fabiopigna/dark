import {World} from "./nature/World";
import {WorldPainter} from "./painters/WorldPainter";


export class MyService {

    constructor() {

    }

    public start():void {
        var svg:SVGSVGElement = <SVGSVGElement>document.getElementsByTagName('svg')[0];
        var snap = Snap(svg);

        var world = new World(1000, 500);
        var worldPainter = new WorldPainter(snap,world);

        
        var timer = d3_timer.timer((elapsed:number) => {
            world.update(elapsed);
            worldPainter.repaint(elapsed);
        });
        
        
        // var circle = snap.circle(100, 100, 10).attr({fill: 'red', stroke: 'red', strokeWidth: '1'});
        // var timer = d3_timer.timer((elapsed:number) => {
        //     console.log(elapsed)
        //     circle.node.setAttribute('cx', ((elapsed / 2000) * 1600).toFixed(2));
        //     circle.node.setAttribute('cy', (100 - 50 * Math.sin((Math.PI * 2 * (elapsed / 2000)))).toFixed(2));
        //     if (elapsed > 2000) timer.stop();
        // });
        
        
    }

    public getMessage() {
        return 'Hello World!';
    }

}