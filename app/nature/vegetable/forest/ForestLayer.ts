import {Forest} from "./Forest";
import {Tree} from "./tree/Tree";
import {IUpdatable} from "../../interface/IUpdatable";
import {RandomTimer} from "../../../time/RandomTimer";
import {IForestLayerListener} from "./IForestLayerListener";
import {LineBounds} from "../../../geometry/LineBounds";
import {Delta} from "../../../geometry/Delta";
/**
 * Created by fabiopigna on 10/06/2016.
 */

export class ForestLayer implements IUpdatable {

    private forest:Forest;
    private trees:Tree[];
    private time:RandomTimer = new RandomTimer(5000, 1000);
    private listeners:IForestLayerListener[];
    private level:number;
    private bounds:LineBounds;

    constructor(forest:Forest, level:number) {
        this.forest = forest;
        this.level = level;
        this.bounds = forest.getBounds().translate(new Delta(0, level * 5));
        this.trees = [];
        this.listeners = [];
    }

    getTrees():Tree[] {
        return this.trees;
    }

    update(elapsed:number):void {
        if (this.time.itsTimeTo(elapsed) && this.trees.length < 6) {
            var newTree = new Tree(this, this.level);
            this.trees.push(newTree);
            this.listeners.forEach((listener:IForestLayerListener)=> listener.treeCreated(newTree))
        }
        this.trees.forEach((tree:Tree)=> tree.update(elapsed));
    }


    getBounds():LineBounds {
        return this.bounds;
    }

    addListener(listener:IForestLayerListener) {
        this.listeners.push(listener);
    }
}