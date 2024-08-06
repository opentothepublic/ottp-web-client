import Link from "next/link";

type Props = {
  title: string;
};

const Tab: React.FC<Props> = ({ title }) => {
  return (
    <li className="py-3 px-6">
      <Link href={"/"}>{title}</Link>
    </li>
  );
};

export const NavBar: React.FC = () => {
  return (
    <nav className="border-black border-b-2">
      <ul className="list-none flex">
        <strong>
          <Tab title="Posts" />
        </strong>
        <Tab title="People" />
        <Tab title="Organizations" />
        <Tab title="Projects" />
      </ul>
    </nav>
  );
};
