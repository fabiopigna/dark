import {IJobResult} from "../IJobResult";
import {IJobConstructor} from "../IJobConstructor";
import {IElement} from "../../../interface/IElement";
import {Human} from "../../Human";
import {IJobEndConstructor} from "../IJobEndConstructor";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export interface IScheduledEndJob{
    where:IElement;
    endJobCtor:IJobEndConstructor
    result:IJobResult;
}