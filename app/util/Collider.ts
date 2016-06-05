/**
 * Created by fabiopigna on 05/06/2016.
 */

export interface Collidable {
    isCollide():boolean;
    startCollide():void;
    stopCollide():void;
    getBoundsCollidable():SAT.Polygon;
}

export class Collider {

    static check(collidables: Array<Collidable>) {
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