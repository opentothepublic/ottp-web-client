import { Button } from "../common/Button";
import { attestOnChain } from "@/utils/blockchain/connectToEAS";

export const AttestButton: React.FC = () => {
  return <Button onClick={attestOnChain}>Make attestation</Button>;
};
