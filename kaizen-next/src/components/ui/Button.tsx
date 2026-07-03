import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "accent" | "ghost";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center font-head font-semibold rounded-full border-[1.5px] whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

const variants: Record<Variant, string> = {
  accent:
    "bg-terra text-white border-transparent shadow-[0_8px_30px_-12px_rgba(217,80,47,0.7)] hover:bg-terra-light hover:-translate-y-[3px] hover:shadow-[0_14px_40px_-12px_rgba(217,80,47,0.85)]",
  ghost:
    "bg-transparent text-sand border-sand/25 hover:border-terra hover:text-terra hover:-translate-y-[3px]",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-[26px] py-[14px] text-[0.98rem]",
  lg: "px-[34px] py-[17px] text-[1.05rem]",
};

type ButtonLinkProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink({
  children,
  variant = "accent",
  size = "md",
  className = "",
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
