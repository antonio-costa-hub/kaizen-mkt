import type { SVGProps } from "react";

export function BrandMark({ size = 34, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} {...props}>
      <circle cx="20" cy="20" r="16" fill="none" stroke="var(--color-sand)" strokeWidth="1.4" opacity="0.25" />
      <path d="M6 24 A14 14 0 0 1 34 24" fill="none" stroke="var(--color-terra)" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="20" cy="24" r="4.5" fill="var(--color-terra)" />
    </svg>
  );
}

const paths: Record<string, React.ReactNode> = {
  traffic: (
    <>
      <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M24 24 L24 8 M24 24 L37 31" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  site: (
    <>
      <rect x="8" y="10" width="32" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M8 18 H40 M14 14 h0.01 M18 14 h0.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  content: (
    <>
      <circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M20 17 L33 24 L20 31 Z" fill="currentColor" />
    </>
  ),
  design: (
    <>
      <circle cx="19" cy="25" r="11" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <rect x="22" y="12" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" />
    </>
  ),
};

export function ServiceIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: string }) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.6 1.4 5.6 1.4h.1c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-4.9 1 1-4.8-.3-.5c-.9-1.5-1.4-3.2-1.4-5C5.2 9.1 10 4.3 16 4.3S26.8 9.1 26.8 15 22 24.8 16 24.8zm6-8.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" />
    </svg>
  );
}
