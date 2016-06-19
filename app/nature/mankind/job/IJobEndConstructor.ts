import {IJob} from "./IJob";
import {IElement} from "../../interface/IElement";
import {Human} from "../Human";
import {IScheduledEndJob} from "./scheduler/IScheduledEndJob";
import {IJobResult} from "./IJobResult";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export interface IJobEndConstructor {
    new (human:Human, element:IElement, result:IJobResult):IJob;
}