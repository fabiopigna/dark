import {ICollidable} from "../nature/interface/ICollidable";
import {ICollidableBounds} from "./ICollidableBounds";
/**
 * Created by fabiopigna on 05/06/2016.
 */


export class Collider {
    static isColliding(first:ICollidableBounds, second:ICollidableBounds):boolean {
        var response = new SAT.Response();
        return SAT.testPolygonPolygon(first.getCollidableBounds(), second.getCollidableBounds(), response);
    }

    static check(collidables:Array<ICollidable>) {
        var response = new SAT.Response();
        for (var i = 0; i < collidables.length; i++) {
            var collided = false;
            var collidableSource = collidables[i];
            for (var j = 0; j < collidables.length; j++) {
                if (i !== j) {
                    response.clear();
                    var cloudTarget = collidables[j];
                    var sourceSAT = collidableSource.getBoundsCollidable();
                    var targetSAT = cloudTarget.getBoundsCollidable();

                    collided = SAT.testPolygonPolygon(sourceSAT, targetSAT, response);
                    if (collided) {
                        break;
                    }
                }

            }
            if (collided && !collidableSource.isCollide()) {
                collidableSource.startCollide();
            }
            else if (!collided && collidableSource.isCollide()) {
                collidableSource.stopCollide();
            }
        }
    }
}