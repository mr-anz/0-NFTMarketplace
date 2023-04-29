require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config()
// const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

//  task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//    const accounts = await hre.ethers.getSigners();

//    for (const account of accounts) {
//      console.log(account.address);
//    }
//  });
const ALCHEMY_URL = process.env.ALCHEMY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: ALCHEMY_URL,
      accounts: [ PRIVATE_KEY ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};