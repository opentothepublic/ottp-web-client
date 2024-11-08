import { PropsWithChildren, useEffect } from "react";

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
        className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%]  bg-white  border-1 border-gray-600"
      >
        <div className="title-large">Sign in or sign up.</div>
        <div className="border-slate-200 leading-normal text-slate-600">
          Coinbase/MetaMask/etc...
        </div>
        <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
          <button
            data-dialog-close="true"
            className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Cancel
          </button>
          <button
            data-dialog-close="true"
            className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
          >
            Confirm
          </button>
        </div>
      </div>
    </DialogOverlay>
  );
};
