import {Point} from "./geometry/Point";
/**
 * Created by fabiopigna on 02/06/2016.
 */

export class PointProvider2 {
    private toCall:()=>Point[];

    constructor(toCall:()=>Point[]){
        this.toCall = toCall;

    }
    getPoints():Point[]{
        return this.toCall();
    };
}