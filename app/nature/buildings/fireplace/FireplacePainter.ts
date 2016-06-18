import {IPainter} from "../../interface/IPainter";
import {Fireplace} from "./Fireplace";
import {Percent} from "../../../util/Percent";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class FireplacePainter implements IPainter {

    private snapGroup:Snap.Paper;
    private sizes = [Percent.valueOf(1.0), Percent.valueOf(0.7), Percent.valueOf(0.4)];
    private snapFireplaces:Snap.Element[];
    private fireplace:Fireplace;


    constructor(snap:Snap.Paper, fireplace:Fireplace) {
        this.fireplace = fireplace;
        this.snapGroup = snap.g().addClass('fireplace_g');
        this.snapFireplaces = this.sizes.map((size:Percent, index:number)=> {
            return this.snapGroup
                .path(fireplace.getBounds().scaleCopy(size).toSnapString())
                .attr({fill: this.getColor(index)});
        });
        this.snapGroup.node.setAttribute('transform', 'translate(' + fireplace.getBounds().getOrigin().x + ',' + fireplace.getBounds().getOrigin().y + ')');

    }


    repaint(elapsed:number) {
        this.snapFireplaces[0].node.setAttribute('d', this.fireplace.getBounds().scaleCopy(new Percent(1.0- 0.2 * Math.random())).toSnapString())
    }

    destroy():void {
        this.snapGroup.remove();
        this.snapFireplaces.forEach((snapFireplace)=>snapFireplace.remove());
    }

    private getColor(index:number):string {
        switch (index) {
            case 0:
                return '#ff0';
            case 1:
                return '#f80';
            case 2:
                return '#f00';
        }
    }
}