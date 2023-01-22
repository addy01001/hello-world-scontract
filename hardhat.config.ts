import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers"
import * as dotenv from "dotenv";
dotenv.config()

const { API_URL, PRIVATE_KEY } = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: API_URL,
      accounts: [`0x${String(PRIVATE_KEY)}`], // TODO: fill the private key
    },

  }
};

export default config;
