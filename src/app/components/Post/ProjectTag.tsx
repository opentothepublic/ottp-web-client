import { ProposalTag } from "./ProposalTag";

type Props = {
  name: string;
};

export const ProjectTag: React.FC<Props> = ({ name }) => {
  return <ProposalTag className="px-8 border-2" name={name} />;
};
