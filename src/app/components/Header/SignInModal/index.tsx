import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "@/components/common/Button";
import { Dialog } from "../../Dialog";

export const SignInModal: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Button data-dialog-target="dialog">Sign in</Button>
      <Dialog />
    </>
  );
};
