# Petrol Calculation #
![LWC-salesforce](https://github.com/Sathish1496/projectPetrolCalculator/assets/81218827/78f1f127-e754-4e85-898c-d45cd3f44559)

## Description of this project: ##
Used to Calculate Fuel Price (only for selected cars) based on the selection.

- carTypeSelection Component is a Parent Component
- petrolCalculation Component is a Child Component
- calculateFuelDisplay Component is a Independent Component

- Mileage auto populate in Child component achieved based on Brand selection in Parent Component.
- Per Day/ Monthly and Yearly Fuel Cost calculation done from Lightning Messaging Service.

## Steps for the Project Implementation: ##

1. Enable Dev Hub in your Trailhead Playground
2. Install Salesforce CLI
3. Install Visual Studio Code
4. Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension
  ----

1. If you haven't already done so, authorize your hub org and provide it with an alias (myhuborg in the command below):
```bash
sf org login web -d -a myhuborg
```

2. Clone the projectPetrolCalculator repository:
```bash
git clone https://github.com/Sathish1496/projectPetrolCalculator.git
```

3. Create a scratch org and provide it with an alias ( in the command below):
```bash
sf org create scratch -d -f config/project-scratch-def.json -a petrolCalculator
```

4. Push the project to your scratch org:
```bash
sf project deploy start
```

5. Assign the object permission set to the default user:
```bash
sf org assign permset -n Object_Access
```

6. Open the scratch org:
```bash
sf org open
```

7. In App Launcher, click View All then select the LWC apps.



### Demo of Project ###


https://github.com/Sathish1496/projectPetrolCalculator/assets/81218827/5aadd419-ca9a-4fb5-893e-3dced004ab02




