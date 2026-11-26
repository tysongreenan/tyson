/** Small "live" marker linking to a project's production URL. */
export function Live({ url, className = "" }: { url: string; className?: string }) {
  const host = new URL(url).hostname.replace(/^www\./, "");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className={`inline-flex items-center gap-1.5 text-rurikon-400 hover:text-rurikon-700 transition-colors whitespace-nowrap ${className}`}
    >
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-emerald-500" />
      <span className="text-[0.8em]">live at {host}</span>
    </a>
  );
}
