import {IHumanPainterConstructor} from "./IHumanPainterConstructor";
/**
 * Created by fabiopigna on 11/06/2016.
 */
export class HumanPaintConfig {

    paintConstructor:IHumanPainterConstructor;


    setPaintConstructor(paintConstructor:IHumanPainterConstructor):HumanPaintConfig {
        this.paintConstructor = paintConstructor;
        return this;
    }
}