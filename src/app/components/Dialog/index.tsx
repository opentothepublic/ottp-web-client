import { PropsWithChildren, useEffect } from "react";
import { Button } from "@/components/common/Button";

type SignInOption = {
  name: string;
  icon: JSX.Element;
};

const signInOptions: SignInOption[] = [
  {
    name: "Coinbase",
    icon: <span className="text-blue-600 text-xl">⬤</span>, // Placeholder for Coinbase logo
  },
  {
    name: "MetaMask",
    icon: <span className="text-orange-500 text-xl">🦊</span>, // Placeholder for MetaMask logo
  },
  {
    name: "WalletConnect",
    icon: <span className="text-blue-400 text-xl">🌐</span>, // Placeholder for WalletConnect logo
  },
  {
    name: "Farcaster",
    icon: <span className="text-purple-600 text-xl">🏛️</span>, // Placeholder for Farcaster logo
  },
];

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

export const Dialog: React.FC = () => {
  useEffect(() => {
    if (document) {
      const openButton = document.querySelector(
        "[data-dialog-target='dialog']"
      );
      const backdrop = document.querySelector(
        "[data-dialog-backdrop='dialog']"
      );
      const closeButtons = document.querySelectorAll(
        "[data-dialog-close='true']"
      );

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
        <div className="title-large">Sign in or sign up.</div>
        <div className="nody-medium">
          Use a Farcaster verified Ethereum address.
        </div>
        <div className="flex flex-col gap-6 pt-6">
          {signInOptions.map((option) => (
            <Button key={option.name} className="flex pl-6 items-center">
              <span className="mr-3">{option.icon}</span>
              <span className="font-semibold">{option.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </DialogOverlay>
  );
};
