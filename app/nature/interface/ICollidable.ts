/**
 * Created by fabiopigna on 06/06/2016.
 */
export interface ICollidable {
    isCollide():boolean;
    startCollide():void;
    stopCollide():void;
    getBoundsCollidable():SAT.Polygon;
}