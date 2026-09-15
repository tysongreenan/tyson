import { A } from "@/components/a";
export default function NotFound() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-rurikon-600">Not found</h1>
      <p>This page does not exist. Go back to the <A href="/">about page</A> or see the <A href="/projects">projects</A>.</p>
    </>
  );
}
