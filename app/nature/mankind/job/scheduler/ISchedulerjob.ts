import {IConditionConstructor} from "../condition/ICondition";
import {IElement} from "../../../interface/IElement";
import {IJobConstructor} from "../IJobConstructor";
import {IJobResult} from "../IJobResult";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export interface  IScheduledJob {

    jobCtor:IJobConstructor;
    where:IElement;
    conditionCtor?:IConditionConstructor;
    
}
