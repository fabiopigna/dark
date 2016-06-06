import {Weather} from "../Weather";
import {Earth} from "../Earth";
import {IUpdatable} from "../interface/IUpdatable";
import {RandomTimer} from "../../time/RandomTimer";
import {FieldConfig} from "./FieldConfig";
import {Cloud} from "../Cloud";
import {IWeatherListener} from "../listeners/IWeatherListener";
import {Death} from "../Death";
import {IFieldListener} from "./IFieldListener";
import {IVegetable} from "./IVegetable";
import {IVegetableConstructor} from "./IVegetableConstructor";
import {LineBounds} from "../../geometry/LineBounds";
import {CenterLineBounds} from "../../geometry/CenterLineBounds";
/**
 * Created by fabiopigna on 06/06/2016.
 */

export class Field implements IUpdatable {

    private earth:Earth;
    private weather:Weather;
    private bounds:LineBounds;
    private vegetables:IVegetable[];

    private death:Death<IVegetable>;
    private clock:RandomTimer;
    private config:FieldConfig;
    private listeners:IFieldListener[];
    private ctor:IVegetableConstructor;

    constructor(earth:Earth, weather:Weather, ctor:IVegetableConstructor, config:FieldConfig) {
        this.earth = earth;
        this.weather = weather;
        this.config = config;
        this.ctor = ctor;
        this.vegetables = [];
        this.listeners = [];
        this.clock = new RandomTimer(config.minTime, config.rageTime);
        this.death = new Death<IVegetable>();
        this.bounds = new CenterLineBounds(earth.getBounds().getTopLine().getRandomPoint(), 50);

    }


    update(elapsed:number) {
        if (this.clock.itsTimeTo(elapsed) && this.vegetables.length < this.config.maxQuantity) {
            var newVegetable = new this.ctor(this);
            this.vegetables.push(newVegetable);
            this.listeners.forEach((listener:IFieldListener)=> {
                listener.createVegetable(newVegetable)
            });
        }
        this.vegetables.forEach((vegetable:IVegetable)=> {
            vegetable.update(elapsed);
        });
        this.death.doYourJob(this.vegetables).forEach((vegetable:IVegetable)=> {
            this.listeners.forEach((listener:IFieldListener)=> {
                listener.removeVegetable(vegetable)
            })
        });

    }

    getVegetables():IVegetable[] {
        return this.vegetables;
    }

    addListener(listener:IFieldListener) {
        this.listeners.push(listener);
    }

    removeListener(listener:IFieldListener) {
        this.listeners.remove(listener);
    }

    getBounds():LineBounds {
        return this.bounds;
    }
}