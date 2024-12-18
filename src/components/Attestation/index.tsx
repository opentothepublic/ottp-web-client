"use client";
import { Transaction } from "@ethereum-attestation-service/eas-sdk";
import { useState } from "react";
import { attestOnChain } from "@/utils/blockchain/connectToEAS";
import { Button } from "../common/Button";
import { ExternalLink } from "../common/ExternalLink";
import { AttestationDialog } from "../AttestationDialog";

export const AttestationSection = () => {
  const [attestationUid, setAttestationUid] = useState("");
  const [transactionData, setTransactionData] =
    useState<Transaction<string> | null>(null);

  const attestationHandler = async () => {
    try {
      const res = await attestOnChain();
      if (res) {
        setAttestationUid(res.newAttestationUID);
        setTransactionData(res.transaction);
      }
    } catch (e) {
      console.log("Error trying to make attestation:", e);
    }
  };

  return (
    <section>
      <AttestationDialog />
      <Button onClick={attestationHandler}>Make attestation</Button>
      {transactionData && (
        <div>
          View on BaseScan&nbsp;
          <ExternalLink
            href={`https://base-sepolia.blockscout.com/tx/${transactionData.receipt?.hash}`}
          >
            here
          </ExternalLink>
        </div>
      )}
      {attestationUid && <div>AttestationUID: {attestationUid}</div>}
    </section>
  );
};
