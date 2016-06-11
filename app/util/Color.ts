/**
 * Created by fabiopigna on 10/06/2016.
 */
export class Color {
    private base:number;
    private delta:number;

    constructor(base:number, delta:number) {
        this.base = base;
        this.delta = delta;

    }

    byLevel(level:number):Snap.HSL {
        return Snap.hsl(0, 0, this.base + (this.delta * level));

    }

}