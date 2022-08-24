# Company Token Front End
This repository contains the html, javascript, tailwind css and react code for the Synpulse Token Management Dashboard.
It uses [Vite](https://vitejs.dev/guide/) to build and provide the dev server.

To begin, clone the repository and bring up the development server by running
##### *npm install*
##### *npm run dev*

### Add/Update smart contract address
1. In ./src/utils/ add the contract abi in a json file
2. In ./src/utils/constants.js import the contract abi and assign the contract address
3. In ./src/context/ContractContext.jsx import the contract abi and contract address
4. In ./src/context/ContractContext.jsx update the *contractABI* and *contractAddress* functions
