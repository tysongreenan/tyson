import { A } from "@/components/a";

export default function About() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance">Tyson Greenan</h1>
      <p className="mt-7">
        I am a developer and digital marketer in Ontario. I work at{" "}
        <A href="https://sway.ca">Sway Advertising</A>, a creative agency in Guelph, on SEO, putting AI into the
        agency&apos;s workflows, and building the websites we ship for clients.
      </p>
      <p className="mt-7">
        On the side I make products. <A href="https://cookie-banner.ca">Cookie Banner</A>, built with Emily Trenchard, is
        a consent banner for PIPEDA, Quebec Law 25, GDPR and CCPA. <A href="https://websitefeedback.ca">Website Feedback</A> lets agencies pin comments on a live
        page with no extension and no sign-up. <A href="https://qr-code.ca">QR Code</A> is a Canadian QR generator —
        static codes are free and stay in the browser. They are the tools I wished existed, so I shipped them.
      </p>
      <p className="mt-7">
        The other half of the job is client sites at Sway: a custom home builder, a hotel, cottages, and the agency
        site itself. I care about search — including how those sites show up in AI answers — and about software that
        marketing teams will actually use.
      </p>
      <p className="mt-7">
        Outside of work I am usually on another side project, or out walking with my dog Luna.
      </p>
      <p className="mt-7">
        You can see what I have been building on the <A href="/projects">projects</A> page, or find me on{" "}
        <A href="https://github.com/tysongreenan">GitHub</A> and{" "}
        <A href="https://www.linkedin.com/in/tyson-greenan-6351a6129">LinkedIn</A>.
      </p>
    </>
  );
}
