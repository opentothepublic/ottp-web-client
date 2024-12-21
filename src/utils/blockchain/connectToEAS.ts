import {
  EAS,
  SchemaEncoder,
  NO_EXPIRATION,
} from "@ethereum-attestation-service/eas-sdk";
import { ethers, toBigInt } from "ethers";

const EASBaseSepoliaContractAddress =
  "0x4200000000000000000000000000000000000021";

export const initializeEAS = async () => {
  if (window.ethereum) {
    try {
      const eas = new EAS(EASBaseSepoliaContractAddress);

      const provider = new ethers.BrowserProvider(window.ethereum);

      eas.connect(provider);
    } catch (e) {
      console.error("Error connecting to wallet:", e);
    }
  } else {
    console.error(
      "No ethereum provider found. Please install one (Metamask,Phantom,etc.) "
    );
  }
};

export const attestOnChain = async (
  recipient: string,
  contributionData: string
) => {
  try {
    if (window.ethereum) {
      const eas = new EAS(EASBaseSepoliaContractAddress);

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();

      eas.connect(signer);

      const schemaEncoder = new SchemaEncoder(
        "uint256 fid, uint256 action, string data, uint8 label, bytes tags"
      );
      const encodedData = schemaEncoder.encodeData([
        { name: "fid", value: toBigInt(2), type: "uint256" },
        { name: "action", value: 1, type: "uint256" },
        { name: "data", value: contributionData, type: "string" },
        { name: "label", value: 2, type: "uint8" },
        { name: "tags", value: "0x3039", type: "bytes" },
      ]);

      const schemaUID =
        "0x9e17d50ab0011c5816db3d3eb79866f1cf66e2933e6ce76199679225ab6cd811";

      // Test wallet "0x65E0b133e2e1A28B2aC5130E8E2588D209C084CF";
      const transaction = await eas.attest({
        schema: schemaUID,
        data: {
          recipient: recipient,
          expirationTime: NO_EXPIRATION,
          revocable: true,
          data: encodedData,
        },
      });

      const newAttestationUID = await transaction.wait();

      return {
        newAttestationUID,
        transaction,
      };
    } else {
      console.error(
        "No ethereum provider found. Please install one (Metamask,Phantom,etc.) "
      );
    }
  } catch (e) {
    console.error(e);
  }
};
