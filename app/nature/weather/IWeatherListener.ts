import {Cloud} from "./Cloud";
import {IVegetable} from "../vegetable/IVegetable";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export interface IWeatherListener {
    cloudCreated(newCloud:Cloud):void;
    cloudRemoved(cloud:Cloud):void;
}