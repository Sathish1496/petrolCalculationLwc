## Steps for the Project Implementation: ##

  Enable Dev Hub in your Trailhead Playground
  Install Salesforce CLI
  Install Visual Studio Code
  Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (myhuborg in the command below):
```bash
sf org login web -d -a myhuborg
```

3. Clone the projectPetrolCalculator repository:
```bash
git clone https://github.com/Sathish1496/projectPetrolCalculator.git
```

5. Create a scratch org and provide it with an alias ( in the command below):
```bash
sf org create scratch -d -f config/project-scratch-def.json -a petrolCalculator
```

7. Push the project to your scratch org:
```bash
sf project deploy start
```

8. Assign the object permission set to the default user:
```bash
sf org assign permset -n Object_Access
```

9. Open the scratch org:
```bash
sf org open
```

10. In App Launcher, click View All then select the LWC apps.



### Demo of Project ###


https://github.com/Sathish1496/projectPetrolCalculator/assets/81218827/5aadd419-ca9a-4fb5-893e-3dced004ab02




