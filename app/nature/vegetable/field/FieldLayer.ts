import {IUpdatable} from "../../interface/IUpdatable";
import {RandomTimer} from "../../../time/RandomTimer";
import {FieldConfig} from "./FieldConfig";
import {Death} from "../../Death";
import {IFieldLayerListener} from "./IFieldLayerListener";
import {IVegetable} from "../IVegetable";
import {LineBounds} from "../../../geometry/LineBounds";
import {Field} from "./Field";
import {Delta} from "../../../geometry/Delta";
/**
 * Created by fabiopigna on 06/06/2016.
 */

export class FieldLayer implements IUpdatable {

    private bounds:LineBounds;
    private vegetables:IVegetable[];

    private death:Death<IVegetable>;
    private clock:RandomTimer;
    private config:FieldConfig;
    private listeners:IFieldLayerListener[];
    private level:number;
    private field:Field;

    constructor(field:Field, level:number, config:FieldConfig) {
        this.field = field;
        this.level = level;
        this.config = config;
        this.vegetables = [];
        this.listeners = [];
        this.clock = new RandomTimer(config.minTimeToBorn, config.rangeTimeToBorn);
        this.death = new Death<IVegetable>();
        this.bounds = field.getBounds().translate(new Delta(level * 5, level * 5));
    }


    update(elapsed:number) {
        if (this.clock.itsTimeTo(elapsed) && this.vegetables.length < this.config.maxQuantity) {
            var newVegetable = new this.config.vegetableConstructor(this, this.level);
            this.vegetables.push(newVegetable);
            this.listeners.forEach((listener:IFieldLayerListener)=> listener.createVegetable(newVegetable));
        }
        this.vegetables.forEach((vegetable:IVegetable)=> {
            vegetable.update(elapsed);
        });
        this.death.doYourJob(this.vegetables).forEach((vegetable:IVegetable)=> {
            this.listeners.forEach((listener:IFieldLayerListener)=> listener.removeVegetable(vegetable))
        });

    }

    getVegetables():IVegetable[] {
        return this.vegetables;
    }

    addListener(listener:IFieldLayerListener) {
        this.listeners.push(listener);
    }

    removeListener(listener:IFieldLayerListener) {
        this.listeners.remove(listener);
    }

    isRaining():boolean {
        return this.field.isRaining();
    }

    getBounds():LineBounds {
        return this.bounds;
    }

    canFarm():boolean {
        return this.vegetables.every((vegetable:IVegetable)=>vegetable.canFarm());
    }
}