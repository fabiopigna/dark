/**
 * Created by fabiopigna on 12/06/2016.
 */
export interface Job {


    isCompleted():boolean;

    update(elapsed:number):void;
}