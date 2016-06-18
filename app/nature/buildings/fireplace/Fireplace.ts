import {Earth} from "../../Earth";
import {FireplaceBounds} from "./FireplaceBounds";
import {IUpdatable} from "../../interface/IUpdatable";
import {ConsumerLife} from "./ConsumerLife";
import {Percent} from "../../../util/Percent";
import {ILife} from "../../ILife";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class Fireplace implements IUpdatable {

    private earth:Earth;
    private bounds:FireplaceBounds;
    private life:ConsumerLife;

    constructor(earth:Earth) {
        this.earth = earth;
        this.bounds = new FireplaceBounds(earth.getBounds().getTopLine().getRandomPoint())
        this.life = new ConsumerLife();
    }

    update(elapsed:number):void {
        this.life.live(elapsed);
        if (this.life.isChanged()) {
            this.bounds.scale(Percent.valueOf(this.life.normalized()));
        }
    }

    getBounds():FireplaceBounds {
        return this.bounds;
    }

    getLife():ConsumerLife {
        return this.life;
    }
}