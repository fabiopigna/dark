import {ISnapBounds} from "../nature/interface/ISnapBounds";
import {Point} from "./Point";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export class CurveBounds implements ISnapBounds {

    private points:Point[];


    constructor(points:Point[]) {
        this.points = points;

    }

    toSnap():{} {
        return {d: this.toSnapString()};
    }

    toSnapString():string {

        let [first, ...others] = this.points;
        let path = 'm ' + first.x + ' ' + first.y + ' C ';
        path = others.reduce((path:string, point:Point)=> {
            return path + ' ' + point.x + ' ' + point.y;
        }, path);
        // <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
        return path
    }

    getPoints():Point[] {
        return this.points;
    }
}