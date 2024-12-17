import NextLink from "next/link";
import { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  href: string;
}

export const ExternalLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} className="text-blue underline" target="_blank">
      {children}
    </NextLink>
  );
};
