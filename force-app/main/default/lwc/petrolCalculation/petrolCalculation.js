import { LightningElement, api, wire } from "lwc";
import dataSelected from "@salesforce/messageChannel/PetrolCalculation__c";
import { MessageContext, publish } from "lightning/messageService";

export default class PetrolCalculation extends LightningElement {
  @api mileage;
  @wire(MessageContext)
  context;

  distance;
  mileageValue;
  fuelCost;

  distanceHandler(event) {
    this.distance = event.target.value;
    console.log("Distance", event.target.value);
  }

  mileageHandler(event) {
    this.mileageValue = event.target.value;
    console.log("Mileage", event.target.value);
  }

  costHandler(event) {
    this.fuelCost = event.target.value;
    console.log("Fuel Cost", event.target.value);
  }

  handleCalculate() {
    const message = {
      distance: {
        value: this.distance
      },
      mileage: {
        value: this.mileageValue
      },
      fuelCost: {
        value: this.fuelCost
      }
    };
    // publish(messageContext, messageChannel, message)
    publish(this.context, dataSelected, message);
  }
}
