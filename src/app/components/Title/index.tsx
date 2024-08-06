import { PropsWithChildren } from "react";

export const Title: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="mt-6">
      <h1 className="text-6xl text-center">Put your work onchain.</h1>
    </div>
  );
};
