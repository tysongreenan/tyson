import { A } from "@/components/a";
import { TokenCounter } from "@/components/token-counter";
import { currentStack, site, skills } from "@/content/site";

export default function About() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance">Tyson Greenan</h1>
      <p className="mt-7">
        I am a full-stack developer in Ontario who builds with AI coding agents every day, with a marketing background
        going back to 2019. I run Claude Code, Codex and Cursor as a team: agents write the code, a second model reviews the
        larger changes, and the work goes through type checks and tests before it merges. I work at <A href="https://sway.ca">Sway Advertising</A>, a
        creative agency in Guelph, where I build the agency&apos;s software and client websites and lead SEO.
      </p>
      <p className="mt-7">
        A lot of my time goes into the software Sway runs on. <A href="/projects#sway-ai">Sway AI</A> is the system the
        whole team works in: social scheduling, client email marketing, an SEO and reporting centre, tasks, docs and
        meetings. I also built the agent harness behind it, where code, not the model, decides what needs a person&apos;s
        approval, and every model choice traces back to a test.{" "}
        <A href="/projects#sway-studio">Sway Studio</A> lets clients edit their own coded website and publish it without
        touching GitHub. <A href="/projects#agency-cms">Agency CMS</A> is a multi-tenant Payload CMS for client sites.
      </p>
      <p className="mt-7">
        On the side I make products. <A href="https://cookie-banner.ca">Cookie Banner</A>, built with Emily Trenchard, is
        a consent banner for PIPEDA, Quebec Law 25, GDPR and CCPA. <A href="https://websitefeedback.ca">Website Feedback</A> lets agencies pin comments on a live
        page with no extension and no sign-up. <A href="https://qr-code.ca">QR Code</A> is a Canadian QR generator —
        static codes are free and stay in the browser. <A href="/projects#signoff">Signoff</A> manages email signatures
        for whole companies on Outlook and Gmail, and is in production with its first client.{" "}
        <A href="/projects#panel">Panel</A> is an open source review
        harness for AI coding agents, published on npm. They are the tools I wished existed, so I shipped them.
      </p>
      <p className="mt-7">
        The other half of the job is client work at Sway: sites for home builders, a hotel, a cottage, a leadership
        coach, and a golf media company with its own CMS. I also build business apps for specific companies, like a
        construction project manager and a home healthcare platform. I care about search, including how sites show up in
        AI answers, and about software that marketing teams will actually use.
      </p>
      <p className="mt-7">
        Outside of work I am usually on another side project, or out walking with my dog Luna.
      </p>

      <TokenCounter className="mt-10 xl:hidden" />

      <h2 id="skills" className="font-semibold mt-14 mb-7 text-rurikon-600 scroll-mt-6 sm:scroll-mt-14">
        Skills
      </h2>
      <p className="mb-7">
        {currentStack} More on the <A href="/toolkit">toolkit</A> page.
      </p>
      <dl className="space-y-3">
        {skills.map((s) => (
          <div key={s.area}>
            <dt className="text-rurikon-600">{s.area}</dt>
            <dd className="text-rurikon-400">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-14">
        My full <A href="/resume">resume</A> is one tab over. You can see what I have been building on the{" "}
        <A href="/projects">projects</A> page, or find me on{" "}
        <A href={`https://github.com/${site.github}`}>GitHub</A> and <A href={site.linkedin}>LinkedIn</A>. There is also a
        plain-text summary for AI agents at <A href="/llms.txt">/llms.txt</A>.
      </p>
    </>
  );
}
