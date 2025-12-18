import { coston2 } from "@flarenetwork/flare-periphery-contract-artifacts";
import { JsonRpcProvider, Contract, formatUnits } from "ethers";

// Coston2 testnet RPC endpoint
// Can use any other RPC endpoint provider
const RPC_URL = "https://coston2-api.flare.network/ext/C/rpc";

async function main() {
  // Create a JSON-RPC provider for Coston2 testnet
  // Can use any other Web3 provider library like web3.js, ethers.js, wagmi etc.
  const provider = new JsonRpcProvider(RPC_URL);

  // Get the AssetManagerFXRP product object
  const assetManagerFXRP = await coston2.products.AssetManagerFXRP;

  // Get the contract address
  // It uses FlareConctracts registry behind the scenes
  // https://dev.flare.network/network/guides/flare-contracts-registry/
  const address = await assetManagerFXRP.getAddress(provider);
  console.log("Contract address:", address);

  // Additional information
  // console.log(assetManagerFXRP.name);
  // console.log(assetManagerFXRP.abi);
  // console.log(assetManagerFXRP.interface);
  // console.log(assetManagerFXRP.registry);

  // Get the interface ABI to interact with the contract
  const interfaceAbi = coston2.interfaceToAbi(assetManagerFXRP.interface);
  // console.log(interfaceAbi);

  // Create a contract instance using the interface ABI and address
  const iAssetManagerFXRP = new Contract(address, interfaceAbi, provider);

  // Get the underlying asset
  const underlyingAsset = await iAssetManagerFXRP.fAsset();
  console.log("FAssets underlying asset:", underlyingAsset);

  // Get the settings
  const settings = await iAssetManagerFXRP.getSettings();
  console.log("Settings:", settings.assetDecimals.toString());

  // Call the lotSize function
  const lotSize = await iAssetManagerFXRP.lotSize();
  console.log("Lot size:", lotSize.toString());
  console.log("Lot size formatted:", formatUnits(lotSize, settings.assetDecimals), "XRP");

}

main().catch(console.error);

