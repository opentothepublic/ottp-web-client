import { PropsWithChildren } from "react";
import { PostSection } from "./PostSection";

export const ProjectAndProposalSection: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return <PostSection className="justify-between">{children}</PostSection>;
};
