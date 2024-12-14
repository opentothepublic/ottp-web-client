import { PropsWithChildren } from "react";
import { Button } from "../common/Button";
import { connectToEAS } from "@/utils/blockchain/connectToEAS";

export const AttestButton: React.FC = () => {
  return <Button onClick={connectToEAS}></Button>;
};
