import Link from "next/link";
import type { ReactNode } from "react";

type SiteLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function SiteLink({ children, className, href }: SiteLinkProps) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a className={className} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
