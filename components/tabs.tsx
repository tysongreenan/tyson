"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";

type Tab = { slug: string; label: string; content: ReactNode };

/**
 * Accessible tabs. Every panel is rendered into the HTML, so crawlers and agents read all of it; once
 * hydrated, unselected panels use hidden="until-found" so find-in-page and #fragment links reach them too.
 */
export function Tabs({ label, tabs }: { label: string; tabs: Tab[] }) {
  const base = useId();
  const [selected, setSelected] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);

  // focusgroup handles arrow keys and the single Tab stop. Polyfill it where it isn't native yet.
  useEffect(() => {
    if (Object.hasOwn(HTMLElement.prototype, "focusGroup")) return;
    let cancelled = false;
    import("@microsoft/focusgroup-polyfill").then(({ polyfill }) => {
      if (!cancelled && list.current) polyfill(list.current);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // React only knows `hidden` as a boolean, so it renders hidden="". Upgrade unselected panels to
  // hidden="until-found" after each render so find-in-page and #fragment links can reveal them.
  // Browsers without support treat it as plain `hidden`.
  useLayoutEffect(() => {
    root.current?.querySelectorAll<HTMLElement>(":scope > [data-tab-index]").forEach((panel) => {
      if (Number(panel.dataset.tabIndex) !== selected) panel.setAttribute("hidden", "until-found");
    });
  }, [selected]);

  // If the row of tabs scrolls (narrow screens), keep the selected tab in view. Skip the first render.
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    list.current
      ?.querySelector<HTMLElement>('[aria-selected="true"]')
      ?.scrollIntoView({ block: "nearest", inline: "nearest", container: "nearest" } as ScrollIntoViewOptions);
  }, [selected]);

  // Find-in-page or a #fragment link revealed a hidden panel: select its tab.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const onBeforeMatch = (e: Event) => {
      const panel = (e.target as HTMLElement).closest<HTMLElement>("[data-tab-index]");
      if (panel) setSelected(Number(panel.dataset.tabIndex));
    };
    el.addEventListener("beforematch", onBeforeMatch);

    // A #fragment link to something inside a panel, on first load (before the upgrade above ran).
    const id = decodeURIComponent(location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    const panel = target && el.contains(target) ? target.closest<HTMLElement>("[data-tab-index]") : null;
    if (panel) {
      setSelected(Number(panel.dataset.tabIndex));
      requestAnimationFrame(() => target?.scrollIntoView());
    }
    return () => el.removeEventListener("beforematch", onBeforeMatch);
  }, []);

  return (
    <div ref={root}>
      <div
        ref={list}
        role="tablist"
        aria-label={label}
        className="flex gap-4 sm:gap-6 overflow-x-auto border-b border-rurikon-border"
        {...({ focusgroup: "tablist nomemory" } as object)}
      >
        {tabs.map((t, i) => (
          <button
            key={t.slug}
            type="button"
            role="tab"
            id={`${base}-${t.slug}-tab`}
            aria-selected={i === selected}
            onFocus={() => setSelected(i)}
            onClick={() => setSelected(i)}
            className="relative flex-none pb-2 text-rurikon-300 hover:text-rurikon-600 transition-colors aria-selected:text-rurikon-700 aria-selected:after:absolute aria-selected:after:inset-x-0 aria-selected:after:bottom-[-1px] aria-selected:after:border-b-2 aria-selected:after:border-current focus-visible:outline focus-visible:outline-dotted focus-visible:outline-rurikon-400"
            {...((i === selected ? { focusgroupstart: "" } : {}) as object)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.slug}
          role="tabpanel"
          aria-labelledby={`${base}-${t.slug}-tab`}
          data-tab-index={i}
          hidden={i !== selected}
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
