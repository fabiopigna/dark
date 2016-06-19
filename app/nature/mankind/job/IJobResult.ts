/**
 * Created by fabiopigna on 18/06/2016.
 */
export interface IJobResult {
    add(result:IJobResult);
    getValue():number;
}