"use client";

/** Opens the browser's print dialog, where "Save as PDF" turns the resume into a file. */
export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden rounded-md border border-rurikon-border px-3 py-1.5 text-[0.85em] text-rurikon-500 hover:text-rurikon-700 hover:border-rurikon-300 transition-colors focus-visible:outline focus-visible:outline-dotted focus-visible:outline-rurikon-400"
    >
      Print or save as PDF
    </button>
  );
}
