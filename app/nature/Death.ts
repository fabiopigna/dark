import {ILiveable} from "./interface/ILiveable";
/**
 * Created by fabiopigna on 05/06/2016.
 */
export class Death<S extends ILiveable> {

    doYourJob(elements:S[]):S[] {
        var dead = elements.filter((element:S)=> element.getLife().isDead());
        dead.forEach((element:S)=> elements.remove(element));
        return dead;
    }
}