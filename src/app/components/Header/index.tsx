"use client";

import { PropsWithChildren } from "react";
import { Link } from 'react-router-dom';


export const Header: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex justify-between">
     <Link to="/" className="text-2xl text-blue-800">ottp://</Link>
      <button className="p-2 bg-black text-white">SIGN IN</button>
    </div>
  );
};
