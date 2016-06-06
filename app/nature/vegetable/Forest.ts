import {IUpdatable} from "../interface/IUpdatable";
import {Earth} from "../Earth";
import {RandomTimer} from "../../time/RandomTimer";
import {Tree} from "./Tree";
import {LineBounds} from "../../geometry/LineBounds";
import {CenterLineBounds} from "../../geometry/CenterLineBounds";
import {IForestListener} from "../listeners/IForestListener";
import {Weather} from "../Weather";

/**
 * Created by fabiopigna on 03/06/2016.
 */
export class Forest implements IUpdatable {

    private earth:Earth;
    private trees:Tree[];
    private time:RandomTimer = new RandomTimer(5000, 1000);
    private bounds:LineBounds;
    private range:number = 100;
    private listeners:IForestListener[];

    constructor(earth:Earth, weather:Weather) {
        this.earth = earth;
        this.bounds = new CenterLineBounds(earth.getBounds().getTopLine().getRandomPoint(), this.range);
        this.trees = [];
        this.listeners = [];
    }

    getTrees():Tree[] {
        return this.trees;
    }

    update(elapsed:number) {
        if (this.time.itsTimeTo(elapsed) && this.trees.length < 10) {
            var newTree = new Tree(this);
            this.trees.push(newTree);
            this.listeners.forEach((listener:IForestListener)=> {
                listener.treeCreated(newTree)
            })
        }
        this.trees.forEach((tree:Tree)=> {
            tree.update(elapsed)
        });
    }

    getBounds():LineBounds {
        return this.bounds;
    }

    addListener(listener:IForestListener) {
        this.listeners.push(listener);
    }
}
