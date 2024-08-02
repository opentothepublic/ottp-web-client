import { PropsWithChildren } from "react";

export const Header: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div>OTTP://</div>
      <button className="p-2 bg-black text-white">SiGN IN</button>
    </div>
  );
};
