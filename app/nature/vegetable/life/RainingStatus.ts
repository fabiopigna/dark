/**
 * Created by fabiopigna on 18/06/2016.
 */
export class RainStatus {
    private wasRaining:boolean;
    private itsRaining:boolean;


    constructor() {
        this.wasRaining = false;
        this.itsRaining = false;
    }

    isStartRaining():boolean {
        return !this.wasRaining && this.itsRaining;
    }

    isStillRaining() {
        return this.wasRaining && this.itsRaining;
    }

    isStopRaining() {
        return this.wasRaining && !this.itsRaining;
    }

    isStillNotRaining() {
        return !this.wasRaining && !this.itsRaining;
    }

    update(itsRaining:boolean) {
        this.wasRaining = this.itsRaining;
        this.itsRaining = itsRaining;
    }
}