/**
 * Created by fabiopigna on 05/06/2016.
 */
declare module SAT {

    class Vector {
        constructor(x:number, y:number)
    }

    class Polygon {
        constructor(origin:Vector, points:Vector[])
    }
    class Response {
        clear():void;
    }

    function testPolygonPolygon(a:Polygon, b:Polygon, response:Response):boolean;

}