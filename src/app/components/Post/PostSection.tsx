import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export const PostSection: React.FC<Props> = ({ children, className }) => {
  return <div className={`flex mb-2 ${className || ""}`}>{children}</div>;
};
