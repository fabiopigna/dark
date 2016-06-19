import {IUpdatable} from "./IUpdatable";
import {IBounds} from "../../geometry/IBounds";
import {IJobResult} from "../mankind/job/IJobResult";
/**
 * Created by fabiopigna on 18/06/2016.
 */
export interface IElement extends IUpdatable {

    getBounds():IBounds;
    addJobResult(result:IJobResult):void;
}