import { FileText, ScrollText, MessageSquare, FilePlus2, ListChecks, Github } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "MADR Template",
    description: "Markdown ADR with status, context, decision and consequences.",
  },
  {
    icon: ScrollText,
    title: "Nygard ADR",
    description: "The original short-form template — context, decision, status, consequences.",
  },
  {
    icon: MessageSquare,
    title: "Y-Statements",
    description: "One-line decision capture for fast-moving teams.",
  },
  {
    icon: FilePlus2,
    title: "RFC Template",
    description: "Lightweight RFC for cross-team proposals and design reviews.",
  },
  {
    icon: ListChecks,
    title: "ADR Browser",
    description: "Filter by status, tag and date across one or many repositories.",
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description: "Sync ADRs from any repository's docs/adr/ folder.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-fuchsia-400">
          Portfolio · Solution Architecture
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl">ADR Decision Platform</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Author, list and version Architecture Decision Records and
          lightweight RFCs — with MADR, Nygard and Y-statement templates and an
          index browser that turns architecture decisions into durable, reviewable
          assets.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/fernandofatech/adr-decision-platform"
            className="rounded-md bg-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-fuchsia-400"
          >
            View on GitHub
          </a>
          <a
            href="https://fernando.moretes.com"
            className="rounded-md border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
          >
            Portfolio
          </a>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-2xl font-semibold">Included templates and tools</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <f.icon className="h-6 w-6 text-fuchsia-400" aria-hidden />
              <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-24 max-w-5xl border-t border-slate-800 pt-8 text-sm text-slate-400">
        <p>
          Built by{" "}
          <a className="text-fuchsia-300 hover:underline" href="https://fernando.moretes.com">
            Fernando Francisco Azevedo
          </a>{" "}
          ·{" "}
          <a
            className="text-fuchsia-300 hover:underline"
            href="https://www.linkedin.com/in/fernando-francisco-azevedo/"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a className="text-fuchsia-300 hover:underline" href="https://github.com/fernandofatech">
            GitHub
          </a>
        </p>
        <p className="mt-2">MIT License · © 2026</p>
      </footer>
    </main>
  );
}
