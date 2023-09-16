**Steps for the Project Implementation:**

1. Enable Dev Hub in your Trailhead Playground
2. Install Salesforce CLI
3. Install Visual Studio Code
4. Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (myhuborg in the command below):
sf org login web -d -a myhuborg 

2. Clone the projectPetrolCalculator repository:
git clone https://github.com/Sathish1496/projectPetrolCalculator.git

3. Create a scratch org and provide it with an alias ( in the command below):
sf org create scratch -d -f config/project-scratch-def.json -a petrolCalculator

4. Push the project to your scratch org:
sf project deploy start

5. Assign the object permission set to the default user:
sf org assign permset -n Object_Access

6. Import sample data:
sf data tree import -p ./data/data-plan.json

7. Open the scratch org:
sf org open

8. In App Launcher, click View All then select the LWC apps.

