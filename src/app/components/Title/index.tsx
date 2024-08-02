import { PropsWithChildren } from "react";

export const Title: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-6xl">Put your work onchain.</h1>
    </div>
  );
};
