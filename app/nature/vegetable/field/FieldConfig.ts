import {IVegetableConstructor} from "../IVegetableConstructor";
/**
 * Created by fabiopigna on 06/06/2016.
 */
export class FieldConfig {
    minTimeToBorn:number;
    rangeTimeToBorn:number;
    maxQuantity:number;
    layers:number;
    vegetableConstructor:IVegetableConstructor;
    numberOfLayers:number;
    fieldWidth:number;

    setMinTimeToBorn(minTimeToBorn:number):FieldConfig {
        this.minTimeToBorn = minTimeToBorn;
        return this;
    }

    setRangeTimeToBorn(rangeTimeToBorn:number):FieldConfig {
        this.rangeTimeToBorn = rangeTimeToBorn;
        return this;
    }

    setMaxQuantity(maxQuantity:number):FieldConfig {
        this.maxQuantity = maxQuantity;
        return this;
    }

    setNumberOfLayer(numberOfLayers:number):FieldConfig {
        this.numberOfLayers = numberOfLayers;
        return this;
    }

    setVegetableConstructor(vegetableConstructor:IVegetableConstructor):FieldConfig {
        this.vegetableConstructor = vegetableConstructor;
        return this;
    }


    setFieldWidth(fieldWidth:number) {
        this.fieldWidth = fieldWidth;
        return this;
    }
}

