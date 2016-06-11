import {IVegetablePainterConstructor} from "./IVegetablePainterConstructor";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class VegetablePaintConfig {

    paintConstructor:IVegetablePainterConstructor;


    setPaintConstructor(paintConstructor:IVegetablePainterConstructor):VegetablePaintConfig {
        this.paintConstructor = paintConstructor;
        return this;
    }
}