import { PropsWithChildren } from "react";
import { Button } from "../common/Button";
import { attestOnChain } from "@/utils/blockchain/connectToEAS";

export const AttestButton: React.FC = () => {
  return <Button onClick={attestOnChain}></Button>;
};
