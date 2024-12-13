import Link from "next/link";

type Props = {
  name: string;
};

export const Collaborator: React.FC<Props> = ({ name }) => {
  return (
    <Link href={`https://farcaster.com/${name}`}>
      <span className="pl-2 text-blue underline">{name}</span>;
    </Link>
  );
};
