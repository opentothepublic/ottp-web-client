import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "@/components/common/Button";
import { Dialog } from "../../Dialog";

export const SignInModal: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [userWallet, setUserWallet] = useState("");

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
