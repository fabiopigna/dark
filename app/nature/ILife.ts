/**
 * Created by fabiopigna on 15/06/2016.
 */
export interface ILife {
    isDead():boolean;
    isChanged():boolean;
    die():number;
    normalized():number;
}