import { A } from "@/components/a";

export default function About() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance">Tyson Greenan</h1>
      <p className="mt-7">
        I am the founder of <A href="https://sway.ca">Sway Advertising</A>, a marketing agency in Canada. My interests
        span web development, marketing tooling, and building software that AI agents can operate as well as people
        can.
      </p>
      <p className="mt-7">
        Most of my recent work is about making Claude Code and similar agents productive on real products: boilerplates
        designed to be driven by an agent, a buyer panel that reviews your product from inside the repo, and a
        reliability layer for agents that need to stay logged in to the web.
      </p>
      <p className="mt-7">
        You can see what I have been building on the <A href="/projects">projects</A> page, or find me on{" "}
        <A href="https://github.com/tysongreenan">GitHub</A>.
      </p>
    </>
  );
}
