import Link from "next/link";
import type { ComponentProps } from "react";

export function A({ href, children, ...rest }: ComponentProps<"a"> & { href: string }) {
  const external = /^https?:\/\//.test(href);
  const cls = "link focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" draggable={false} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} draggable={false} className={cls} {...rest}>
      {children}
    </Link>
  );
}
