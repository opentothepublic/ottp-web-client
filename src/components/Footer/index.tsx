import Link from "next/link";
import { PropsWithChildren } from "react";

const ListItem: React.FC<PropsWithChildren> = ({ children }) => {
  return <li className="underline inline-block pl-2">{children}</li>;
};

export const Footer: React.FC = () => {
  return (
    <div className="flex justify-between py-6 bg-black text-white fixed bottom-0 px-10 w-full">
      <div>Open to the Public</div>
      <nav className="flex ">
        <ul className="list-none">
          <ListItem>
            <Link href="/">Support</Link>
          </ListItem>
          <ListItem>
            <Link href="/">Terms</Link>
          </ListItem>
          <ListItem>
            <Link href="/">Privacy</Link>
          </ListItem>
        </ul>
      </nav>
    </div>
  );
};
