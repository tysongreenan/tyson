"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/timeline", label: "Timeline" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="mobile:mr-6 sm:mr-10 md:mr-14 w-full mobile:w-16">
      <ul className="lowercase text-right mobile:sticky top-6 sm:top-10 md:top-14 mb-6 mobile:mb-0 flex gap-2 justify-end mobile:block">
        {items.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <li
              key={item.href}
              className={`${active ? "text-rurikon-800" : "text-rurikon-300 hover:text-rurikon-600"} transition-colors -mx-2`}
            >
              <Link
                href={item.href}
                draggable={false}
                className="inline-block w-full px-2 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-dotted focus-visible:text-rurikon-600"
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
