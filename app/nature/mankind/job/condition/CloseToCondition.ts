import {Collider} from "../../../../util/Collider";
import {IElement} from "../../../interface/IElement";
import {Human} from "../../Human";
import {ICondition} from "./ICondition";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export class CloseToCondition implements ICondition {
    private human:Human;
    private element:IElement;

    constructor(human:Human, element:IElement) {
        this.human = human;
        this.element = element;

    }

    isTrue():boolean {
        return Collider.isColliding(this.human.getBounds(), this.element.getBounds());
    }

}