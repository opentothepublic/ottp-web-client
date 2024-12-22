import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export enum ButtonVariant {
  MAIN = "main",
  IDLE = "idle",
}

interface Props
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariant;
  className?: string;
}

const base = "text-center px-12 py-3" + " ";
const main = base + "bg-black text-white";
const idle = base + "bg-gray-100 text-gray-400 cursor-not-allowed";

export const Button: React.FC<Props> = ({
  children,
  className,
  variant,
  ...props
}) => {
  const variantStyles = variant === ButtonVariant.IDLE ? idle : main;

  return (
    <button className={`${variantStyles} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};
