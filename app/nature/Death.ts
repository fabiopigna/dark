import {ILiveable} from "./interface/ILiveable";
/**
 * Created by fabiopigna on 05/06/2016.
 */
export class Death<S extends ILiveable> {

    doYourJob(souls:S[]):S[] {
        var dead = souls.filter((soul:S)=> {
            return soul.getLife().isDead();
        });
        dead.forEach((cloud:S)=> {
            souls.remove(cloud);
        });
        return dead;
    }
}