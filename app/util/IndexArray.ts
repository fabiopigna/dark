/**
 * Created by fabiopigna on 10/06/2016.
 */
export class IndexArray extends Array<number> {

    constructor(number:number) {
        super();
        for (var i = 0; i < number; i++) {
            this.push(i);
        }
    }
}