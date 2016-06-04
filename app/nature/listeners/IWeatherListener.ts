import {Cloud} from "../Cloud";
/**
 * Created by fabiopigna on 03/06/2016.
 */
export interface IWeatherListener {
    cloudCreated(newCloud:Cloud):void;

}