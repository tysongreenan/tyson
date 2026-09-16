/** Product wordmark, optically sized like shud.in's project logos. */
export function Wordmark({
  src,
  alt,
  height,
}: {
  src: string;
  alt: string;
  height: number;
}) {
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      draggable={false}
      className="inline w-auto max-w-[min(100%,14rem)] align-middle select-none"
      style={{ height }}
    />
  );
}

/** Small square mark for the Sway client list. */
export function ClientMark({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="inline-flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-0.5 outline outline-black/10">
      <img src={src} alt={alt} draggable={false} className="size-full object-contain" />
    </span>
  );
}
