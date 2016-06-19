import {IElement} from "../../../interface/IElement";
import {Human} from "../../Human";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export interface IConditionConstructor {
    new (human:Human, element:IElement):ICondition
}

export interface ICondition {
    isTrue():boolean;

}