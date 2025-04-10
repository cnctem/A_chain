const hre = require("hardhat");

async function main() {
  const AssetManagement = await hre.ethers.getContractFactory("AssetManagement");
  const assetManagement = await AssetManagement.deploy();

  await assetManagement.deployed();

  console.log("AssetManagement deployed to:", assetManagement.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});