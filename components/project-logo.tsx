/** Product wordmark, optically sized like shud.in's project logos. Width and height are set so it never shifts layout. */
export function Wordmark({
  src,
  alt,
  height,
  width,
}: {
  src: string;
  alt: string;
  height: number;
  width: number;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      draggable={false}
      className="wordmark inline w-auto max-w-[min(100%,14rem)] align-middle select-none"
      style={{ height }}
    />
  );
}

/** Small square mark for project lists. Below the fold, so it loads lazily. Falls back to the title's first letter. */
export function ClientMark({ src, title }: { src?: string; title: string }) {
  return (
    <span
      aria-hidden
      className="inline-flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-0.5 outline outline-black/10"
    >
      {src ? (
        <img src={src} alt="" width={32} height={32} loading="lazy" draggable={false} className="size-full object-contain" />
      ) : (
        <span className="text-[0.8rem] font-semibold text-[#697381]">{title.charAt(0)}</span>
      )}
    </span>
  );
}
