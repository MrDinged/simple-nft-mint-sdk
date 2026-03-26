import { SimpleNFTMint, DEFAULT_CONTRACT_NAME } from "simple-nft-mint";

console.log("Simple NFT Mint Growth Bot running...");

console.log("SDK Default Contract Name:", DEFAULT_CONTRACT_NAME);

if (typeof SimpleNFTMint !== "function") {
  console.error("Smoke check failed: SimpleNFTMint is not available.");
  process.exit(1);
}

const sdk = new SimpleNFTMint();
console.log("Smoke check passed: SimpleNFTMint instantiated successfully.");
