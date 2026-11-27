import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/nav";
import { TokenCounter } from "@/components/token-counter";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: site.name, template: `%s - ${site.name}` },
  description: site.tagline,
  metadataBase: new URL(site.url),
  // Opt in to the phone's OS text size (respect-os-text-scale). Browsers without support ignore it.
  other: { "text-scale": "scale" },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#131518" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} touch-manipulation`}>
      <body className="w-full p-6 sm:p-10 md:p-14 text-sm leading-6 sm:text-[0.9375rem] sm:leading-7 md:text-base md:leading-7 text-rurikon-500 antialiased font-sans">
        <div className="fixed sm:hidden h-6 w-full top-0 left-0 z-30 pointer-events-none content-fade-out" />
        <div className="flex flex-col mobile:flex-row">
          <Nav />
          <main className="relative flex-1 max-w-2xl min-w-0">
            <div className="absolute w-full h-px opacity-50 bg-rurikon-border right-0 mobile:right-auto mobile:left-0 mobile:w-px mobile:h-full mobile:opacity-100" />
            <article className="pl-0 pt-6 mobile:pt-0 mobile:pl-6 sm:pl-10 md:pl-14">
              <ViewTransition>{children}</ViewTransition>
            </article>
          </main>
          {/* Beside the page on wide screens only; About and Toolkit show it inline below that width. */}
          <aside aria-label="Token counter" className="hidden xl:block ml-14 w-64 shrink-0 print:hidden">
            <div className="sticky top-14">
              <TokenCounter variant="side" />
            </div>
          </aside>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
