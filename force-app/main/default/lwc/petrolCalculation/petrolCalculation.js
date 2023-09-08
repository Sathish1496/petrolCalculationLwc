import { LightningElement, api, track } from "lwc";

export default class PetrolCalculation extends LightningElement {
  @api mileage;

  @track distance;
  @track selectLocation;
  @track fuelCost;

  handleCalculate() {}
}
