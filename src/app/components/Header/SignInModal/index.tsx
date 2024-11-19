import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "@/components/common/Button";
import { Dialog } from "../../Dialog";
import { ethers } from "ethers";

export const SignInModal: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [userWallet, setUserWallet] = useState("");

  useEffect(() => {
    async function checkIfUserWallet() {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const accountAddress = await signer.getAddress();

          setUserWallet(accountAddress);
        }
      }
    }
    checkIfUserWallet();
  }, []);

  return (
    <>
      {!userWallet ? (
        <Button data-dialog-target="dialog">Sign in</Button>
      ) : (
        <div>Wallet signed in: {userWallet}</div>
      )}
      <Dialog setUserWallet={setUserWallet} />
    </>
  );
};
