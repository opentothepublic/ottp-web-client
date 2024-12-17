"use client";
import { PropsWithChildren } from "react";

export const Title: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="my-6">
      <h1 className="text-5xl ">Put your work onchain.</h1>
    </div>
  );
};
