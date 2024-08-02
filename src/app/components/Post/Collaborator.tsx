type Props = {
  name: string;
};

export const Collaborator: React.FC<Props> = ({ name }) => {
  return <span className="pl-2 text-blue-800">{name}</span>;
};
