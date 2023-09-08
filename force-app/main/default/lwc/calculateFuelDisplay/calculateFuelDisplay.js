import { LightningElement } from "lwc";

export default class CalculateFuelDisplay extends LightningElement {
  /* Daily Fuel Cost
Fuel Amount = Distance (500 KM) / Mileage (18 KM/l)
Cost/day = Fuel Amount (27.7) * Fuel Price per liter (102.6) */
  /* Monthly Fuel Cost
Fuel Amount = (Distance (500 KM) * Number of days per mont = 30days)/ Mileage (18 KM/l)
Cost/month = Fuel Amount (833.3) * Fuel Price per liter (102.6) */
  /*Yearly Fuel Cost
Fuel Amount = (Distance (500 KM) * Number of days per month = 365days)/ Mileage (18 KM/l)
Cost/year = Fuel Amount (833.3) * Fuel Price per liter (102.6) */
}
