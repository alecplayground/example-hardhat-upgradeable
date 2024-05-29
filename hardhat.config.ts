import { HardhatUserConfig } from "hardhat/config";
import "@openzeppelin/hardhat-upgrades";
import "@nomicfoundation/hardhat-toolbox";
import { vars } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    baseSepolia: {
      url: vars.get("HTTP_RPC_URL_BASE_SEPOLIA"),
      accounts: [vars.get("PRIVATE_KEY_BASE_SEPOLIA")],
    },
  },
};

export default config;
