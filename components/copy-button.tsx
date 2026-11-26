"use client";

import { useEffect, useRef, useState } from "react";

let lastMessage = "";

/**
 * Copies the text of the element whose id is `target`. Uses Invoker Commands (command="--copy" + commandfor)
 * where supported and a click handler otherwise, never both. The status span beside the button is the
 * visible feedback and the live region.
 */
export function CopyButton({ target, label }: { target: string; label: string }) {
  const button = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const copyRef = useRef<() => Promise<void>>(async () => {});
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const report = (ok: boolean) => {
      clearTimeout(timer.current);
      let next = ok ? "Copied" : "Copy failed";
      // VoiceOver skips a message identical to the last one, so make repeats differ invisibly.
      if (next === lastMessage) next += " ";
      lastMessage = next;
      setState(ok ? "copied" : "failed");
      setMessage("");
      requestAnimationFrame(() => setMessage(next));
      timer.current = setTimeout(() => {
        setState("idle");
        setMessage("");
      }, 2000);
    };

    copyRef.current = async () => {
      const text = document.getElementById(target)?.innerText.trim();
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        report(true);
      } catch {
        report(false);
      }
    };

    if (!("CommandEvent" in window)) return () => clearTimeout(timer.current);
    // `command` events do not bubble: listen in the capture phase. event.source is the clicked button.
    const onCommand = (event: Event) => {
      const e = event as Event & { command: string; source: Element | null };
      if (e.source === button.current && e.command === "--copy") copyRef.current();
    };
    document.addEventListener("command", onCommand, true);
    return () => {
      document.removeEventListener("command", onCommand, true);
      clearTimeout(timer.current);
    };
  }, [target]);

  return (
    <span className="inline-flex items-center gap-2">
      <span
        role="status"
        className="text-[0.8em] text-rurikon-400 transition-opacity"
        style={{ opacity: message ? 1 : 0 }}
      >
        {message}
      </span>
      <button
        ref={button}
        type="button"
        // Fallback path only for browsers without Invoker Commands.
        onClick={() => {
          if (!("CommandEvent" in window)) copyRef.current();
        }}
        data-state={state}
        className="min-h-6 min-w-6 rounded-md border border-rurikon-border bg-[var(--background)] px-2 py-0.5 text-[0.8em] text-rurikon-500 hover:text-rurikon-700 hover:border-rurikon-300 transition-colors focus-visible:outline focus-visible:outline-dotted focus-visible:outline-rurikon-400"
        {...({ command: "--copy", commandfor: target } as object)}
      >
        {label}
        {state === "copied" ? <span aria-hidden> ✓</span> : null}
      </button>
    </span>
  );
}
