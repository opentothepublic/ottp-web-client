"use client";

import { MutableRefObject, PropsWithChildren, useEffect, useRef } from "react";
import { SignInOption, signInMetamask } from "./constants";
import { Button } from "@/components/common/Button";

interface Props {
  setUserWallet: React.Dispatch<React.SetStateAction<string>>;
}

const closeDialog = (ref: MutableRefObject<HTMLElement | null>) => {
  ref.current?.click();
};

const DialogOverlay: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      data-dialog-backdrop="dialog"
      data-dialog-backdrop-close="true"
      className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
    >
      {children}
    </div>
  );
};

export const Dialog: React.FC<Props> = ({ setUserWallet }) => {
  const backdropRef = useRef<HTMLElement | null>(null);

  const connectToWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setUserWallet(accounts[0]);
        closeDialog(backdropRef);
      } catch {
        console.error("There was an issue connecting to your metamask account");
      }
    } else {
      console.log("No metamask wallet found");
    }
  };

  useEffect(() => {
    if (document) {
      const openButton = document.querySelector(
        "[data-dialog-target='dialog']"
      ) as HTMLElement | null;

      const backdrop = document.querySelector(
        "[data-dialog-backdrop='dialog']"
      ) as HTMLElement | null;

      const closeButtons = document.querySelectorAll(
        "[data-dialog-close='true']"
      ) as NodeListOf<HTMLElement> | null;

      backdropRef.current = backdrop;

      if (openButton && backdrop) {
        openButton.addEventListener("click", () => {
          backdrop.classList.remove("pointer-events-none", "opacity-0");
        });
      }

      if (closeButtons && backdrop) {
        closeButtons.forEach((button) => {
          button.addEventListener("click", () => {
            backdrop.classList.add("pointer-events-none", "opacity-0");
          });
        });
      }

      if (backdrop) {
        backdrop.addEventListener("click", (event) => {
          // Ensure the backdrop itself was clicked, not the dialog content inside it
          if (event.target === event.currentTarget) {
            backdrop.classList.add("pointer-events-none", "opacity-0");
          }
        });
      }
    }
  }, []);

  return (
    <DialogOverlay>
      <div
        data-dialog="dialog"
        className="relative bg-white p-12 border-1 border-gray-600 max-w-xs"
      >
        <button
          onClick={() => closeDialog(backdropRef)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          X
        </button>
        <div className="title-large">Sign in or sign up.</div>
        <div className="nody-medium">
          Use a Farcaster verified Ethereum address.
        </div>
        <div className="flex flex-col gap-6 pt-6">
          {signInMetamask.map((option: SignInOption) => (
            <Button
              key={option.name}
              className="flex pl-6 items-center"
              onClick={() => connectToWallet()}
            >
              <span className="mr-3">{option.icon}</span>
              <span className="font-semibold">{option.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </DialogOverlay>
  );
};
