In order to run this solution, please follow the steps below:

1. Deploy the repository in a location of your choice
2. run `npm i` to install dependencies
3. run `npx wdio run ./wdio.conf.js` to see the automated tests in action

### Note:
Please be aware that I have limited the number of maxInstances to 1 and capabilities to Chrome and Firefox. So, given that there are two feature files, the automation will execute one feature file at a time in a given browser and then move to the next feature file.
