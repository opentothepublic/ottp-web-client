"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { SignInModal } from "./SignInModal";

export const Header: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex justify-between relative">
      <div className="text-2xl text-blue">ottp://</div>
      <SignInModal />
    </div>
  );
};
