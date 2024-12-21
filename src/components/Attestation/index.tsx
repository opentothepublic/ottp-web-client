"use client";

import { Transaction } from "@ethereum-attestation-service/eas-sdk";
import { useState } from "react";
import { ExternalLink } from "../common/ExternalLink";
import { AttestationDialog } from "../AttestationDialog";

export const AttestationSection = () => {
  const [attestationUid, setAttestationUid] = useState("");
  const [transactionData, setTransactionData] =
    useState<Transaction<string> | null>(null);

  return (
    <section>
      <AttestationDialog />
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
