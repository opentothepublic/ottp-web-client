import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  className?: string;
}

export const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-black text-center text-white px-12 py-3 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
