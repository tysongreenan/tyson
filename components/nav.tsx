"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/timeline", label: "Timeline" },
  { href: "/toolkit", label: "Toolkit" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="mobile:mr-6 sm:mr-10 md:mr-14 w-full mobile:w-16">
      <ul className="lowercase text-right mobile:sticky top-6 sm:top-10 md:top-14 mb-6 mobile:mb-0 flex flex-wrap justify-end mobile:block">
        {items.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <li key={item.href} className="mobile:-mx-2">
              <Link
                href={item.href}
                draggable={false}
                aria-current={active ? "page" : undefined}
                className="inline-flex w-full items-center justify-end px-1.5 mobile:px-2 pointer-coarse:min-h-11 text-rurikon-400 hover:text-rurikon-700 aria-[current=page]:text-rurikon-800 aria-[current=page]:underline underline-offset-4 decoration-rurikon-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dotted focus-visible:outline-rurikon-400 focus-visible:rounded-xs"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
