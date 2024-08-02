import { PropsWithChildren } from "react";

export const PostSection: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="flex my-2">{children}</div>;
};
