import { LightningElement, track } from "lwc";

export default class CarTypeSelection extends LightningElement {
  @track selectedBrand = "";
  @track mileage = "";
  // hideComp = "";
  handleBrandChange(event) {
    this.selectedBrand = event.detail.value;
    if (this.selectedBrand === "Ford") {
      this.mileage = 25;
    } else if (this.selectedBrand === "BMW") {
      this.mileage = 10;
    } else if (this.selectedBrand === "Honda") {
      this.mileage = 30;
    } else if (this.selectedBrand === "Hyundai") {
      this.mileage = 28;
    } else if (this.selectedBrand === "Jeep") {
      this.mileage = 18;
    } else if (this.selectedBrand === "Kia") {
      this.mileage = 18;
    } else if (this.selectedBrand === "Mahindra") {
      this.mileage = 25;
    } else if (this.selectedBrand === "Maruti Suzuki") {
      this.mileage = 34;
    } else if (this.selectedBrand === "MG Motor") {
      this.mileage = 12;
    } else if (this.selectedBrand === "Nissan") {
      this.mileage = 28;
    } else if (this.selectedBrand === "Renault") {
      this.mileage = 32;
    } else if (this.selectedBrand === "Skoda") {
      this.mileage = 24;
    } else if (this.selectedBrand === "Tata Motors") {
      this.mileage = 35;
    } else if (this.selectedBrand === "Toyota") {
      this.mileage = 18;
    } else {
      this.mileage = "";
    }
  }
}
