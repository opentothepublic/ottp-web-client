"use client";

import { PropsWithChildren } from "react";
import { RainbowKitConnectButton } from "./RainbowKitConnectButton";

export const Header: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex justify-between relative">
      <div className="text-2xl text-blue">ottp://</div>
      <RainbowKitConnectButton />
    </div>
  );
};
