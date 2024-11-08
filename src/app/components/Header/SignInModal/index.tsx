import { PropsWithChildren, useEffect, useState } from "react";
import { Dialog } from "../../Dialog";

export const SignInModal: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <button
        data-dialog-target="dialog"
        className="bg-black border border-transparent text-center text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Sign in
      </button>
      <Dialog />
    </>
  );
};
