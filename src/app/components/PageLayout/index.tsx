import { PropsWithChildren } from "react";

export const PageContainer: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return <div className="m-10 ">{children}</div>;
};
