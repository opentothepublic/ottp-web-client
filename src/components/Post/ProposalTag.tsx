type Props = {
  name: string;
  className?: string;
};

export const ProposalTag: React.FC<Props> = ({ name, className }) => {
  return (
    <span className={`text-gray-500 mr-6 ${className || ""}`}>{name}</span>
  );
};
