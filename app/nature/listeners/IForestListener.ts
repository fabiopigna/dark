import {Tree} from "../Tree";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export interface IForestListener {
    treeCreated(newTree:Tree):void;


}