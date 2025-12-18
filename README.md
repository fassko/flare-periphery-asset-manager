# Flare Periphery Asset Manager

A TypeScript example demonstrating how to interact with the Flare Network's FAssets AssetManager contract on the Coston2 testnet using the `@flarenetwork/flare-periphery-contract-artifacts` package.

## Overview

This project shows how to:
- Connect to the Coston2 testnet
- Get the `AssetManagerFXRP` contract address from the [Flare Contracts Registry](https://dev.flare.network/network/guides/flare-contracts-registry)
- Create a contract instance and call read methods
- Retrieve FAsset information like the underlying asset, settings, and lot size

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Installation

```bash
npm install
```

## Usage

Run the script:

```bash
npm start
```

This will output information about the AssetManagerFXRP contract including:
- Contract address
- FAssets underlying asset address
- Asset decimals from settings
- Lot size in XRP

## Dependencies

- **ethers** - Ethereum library for interacting with the blockchain
- **@flarenetwork/flare-periphery-contract-artifacts** - Flare Network contract artifacts and helpers

## Resources

- [Flare Network Documentation](https://dev.flare.network/)
- [Flare Contracts Registry Guide](https://dev.flare.network/network/guides/flare-contracts-registry/)
- [FAssets Documentation](https://dev.flare.network/fassets/)
