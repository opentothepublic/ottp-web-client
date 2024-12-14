import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
  NO_EXPIRATION,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers, toBigInt } from "ethers";

const setupSigner = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Create an ethers provider using the browser's Ethereum provider (MetaMask)
      const provider = await new ethers.BrowserProvider(window.ethereum);

      // Get the signer (user's wallet)
      const signer = await provider.getSigner();

      // Get the address of the signer (user's wallet address)
      const signerAddress = await signer.getAddress();
      console.log("Signer address:", signerAddress);
      return signer;
    } catch (e) {
      console.error("Error connecting to wallet:", e);
    }
    // Request account access (only needed once in the browser)
  } else {
    console.error(
      "No ethereum provider found. Please install one (Metamask,Phantom,etc.) "
    );
  }
};

export const connectToEAS = async () => {
  try {
    const connectedSigner = await setupSigner();
    if (!connectedSigner) {
      throw new Error("no address found");
    }

    // Sepolia - https://docs.attest.org/docs/quick--start/contracts
    const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";

    // Initialize the sdk with the address of the EAS Schema contract address
    const eas = new EAS(EASContractAddress);

    // Gets a default provider (in production use something else like infura/alchemy)

    // Connects an ethers style provider/signingProvider to perform read/write functions.
    // MUST be a signer to do write operations!
    eas.connect(connectedSigner);

    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder(
      "uint256 fid, uint256 action, string data, uint8 label, bytes tags"
    );
    const encodedData = schemaEncoder.encodeData([
      { name: "fid", value: 2, type: "uint256" },
      { name: "action", value: 2, type: "uint256" },
      { name: "data", value: "Test data", type: "string" },
      { name: "label", value: 2, type: "uint8" },
      { name: "tags", value: "0x3039", type: "bytes" },
    ]);

    const schemaUID =
      "0x9e17d50ab0011c5816db3d3eb79866f1cf66e2933e6ce76199679225ab6cd811";

    const phantomTestWallet = "0x65e0b133e2e1a28b2ac5130e8e2588d209c084cf";

    const transaction = await eas.attest({
      schema: schemaUID,
      data: {
        recipient: phantomTestWallet,
        expirationTime: NO_EXPIRATION,
        revocable: true, // Be aware that if your schema is not revocable, this MUST be false
        data: encodedData,
        // value: toBigInt(10000),
      },
    });

    const newAttestationUID = await transaction.wait();

    // console.log("New attestation UID:", newAttestationUID);

    console.log("Transaction receipt:", transaction);
  } catch (e) {
    if (e instanceof Error) {
      console.error("Error message:", e.message);
      console.error("Stack trace:", e.stack);
      console.error("Error name:", e.name);
    } else {
      console.error("Unexpected error:", e);
    }
  }
};
