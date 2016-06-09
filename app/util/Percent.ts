/**
 * Created by fabiopigna on 08/06/2016.
 */
export class Percent {
    private n:number;

    constructor(n:number) {
        if (n < 0 || n > 1) {
            throw new Error('not percent ' + n);
        }
        this.n = n;
    }

    get():number {
        return this.n;
    }

    static valueOf(n:number):Percent {
        return new Percent(n);
    }
}