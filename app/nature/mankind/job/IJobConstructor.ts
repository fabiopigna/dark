import {IJob} from "./IJob";
import {IElement} from "../../interface/IElement";
import {Human} from "../Human";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export interface IJobConstructor {
    new (human:Human, element:IElement, startTime:number):IJob;
}