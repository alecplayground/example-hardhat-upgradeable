import hre from "hardhat";

async function main() {
  console.log("Deploying Example");
  const Example = await hre.ethers.getContractFactory("Example");
  const example = await hre.upgrades.deployProxy(Example, []);
  await example.waitForDeployment();
  console.log(`Example deployed to ${await example.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
