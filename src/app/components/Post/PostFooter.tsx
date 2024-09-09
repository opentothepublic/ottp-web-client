import { PropsWithChildren } from "react";
import { PostSection } from "./PostSection";

export const PostFooter: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <PostSection className="justify-between mt-4">{children}</PostSection>;
};
