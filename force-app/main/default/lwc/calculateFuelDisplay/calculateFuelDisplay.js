import { LightningElement, wire } from "lwc";
import dataSelected from "@salesforce/messageChannel/PetrolCalculation__c";
import {
  subscribe,
  MessageContext,
  APPLICATION_SCOPE
} from "lightning/messageService";

export default class CalculateFuelDisplay extends LightningElement {
  @wire(MessageContext)
  context;

  distance = 0;
  mileage = 0;
  fuelCost = 0;
  dailyFuelCost;
  monthlyFuelCost;
  annualFuelCost;

  connectedCallback() {
    this.subscribeMessage();
  }
  subscribeMessage() {
    // subscribe(messageContext, messageChannel, listener, subscriberOptions)
    subscribe(
      this.context,
      dataSelected,
      (message) => {
        this.handleMessage(message);
      },
      { scope: APPLICATION_SCOPE }
    );
  }

  handleMessage(message) {
    this.distance = message.distance.value;
    this.mileage = message.mileage.value;
    this.fuelCost = message.fuelCost.value;

    this.calculateDailyFuelCost();
  }

  calculateDailyFuelCost() {
    /* Daily Fuel Cost
Fuel Amount = Distance (500 KM) / Mileage (18 KM/l)
Cost/day = Fuel Amount (27.7) * Fuel Price per liter (102.6) */

    if (this.distance && this.mileage && this.fuelCost) {
      this.dailyFuelCost = Math.floor(
        (this.distance / this.mileage) * this.fuelCost
      ).toLocaleString("en-US");
      this.monthlyFuelCost = Math.floor(
        ((this.distance * 30) / this.mileage) * this.fuelCost
      ).toLocaleString("en-US");
      this.annualFuelCost = Math.floor(
        ((this.distance * 365) / this.mileage) * this.fuelCost
      ).toLocaleString("en-US");
    }

    /* Monthly Fuel Cost
Fuel Amount = (Distance (500 KM) * Number of days per mont = 30days)/ Mileage (18 KM/l)
Cost/month = Fuel Amount (833.3) * Fuel Price per liter (102.6) */

    /*Yearly Fuel Cost
Fuel Amount = (Distance (500 KM) * Number of days per month = 365days)/ Mileage (18 KM/l)
Cost/year = Fuel Amount (833.3) * Fuel Price per liter (102.6) */
  }
}
