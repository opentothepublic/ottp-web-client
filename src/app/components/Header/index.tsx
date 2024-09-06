import { PropsWithChildren } from "react";

export const Header: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div className="text-2xl text-blue-800">ottp://</div>
      <button className="p-2 bg-black text-white">SIGN IN</button>
    </div>
  );
};
