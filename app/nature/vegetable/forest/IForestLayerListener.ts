import {Tree} from "./tree/Tree";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export interface IForestLayerListener {
    treeCreated(newTree:Tree):void;


}