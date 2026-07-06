import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink, Code2 } from "lucide-react";
import hulk from "@/assets/heroes/hulk.jpg.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Stuti Mohapatra" },
      { name: "description", content: "Web, AI/ML and Python projects." },
    ],
  }),
  component: Projects,
});

const projects = [
  { name: "AI Study Companion", stack: ["Python", "ML", "Streamlit"], body: "An AI-assisted learning tool that generates study summaries and quiz questions from notes." },
  { name: "Portfolio v2", stack: ["React", "TanStack", "Tailwind"], body: "This site — Avengers-themed portfolio with per-page character themes and live LeetCode data." },
  { name: "Java DSA Vault", stack: ["Java", "DSA"], body: "Curated implementations of core data structures and algorithms with test coverage and complexity notes." },
];

function Projects() {
  return (
    <div className="theme-hulk cursor-hulk min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* Hulk backdrop — smash storm */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={hulk.url} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/70 to-background" />
        <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-hero blur-[140px] opacity-40" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-700 blur-[140px] opacity-30" />
      </div>


      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <p className="font-display text-sm tracking-[0.35em] text-hero uppercase flex items-center gap-2">
            <Code2 className="h-4 w-4" /> Smash Bugs
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-black">
            Projects that <span className="text-hero">Hulk Out</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Big ideas, bigger builds. Selected work across web, AI/ML and systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(p => (
            <article key={p.name} className="group rounded-xl border border-border bg-card/70 p-6 backdrop-blur transition hover:border-hero hover:hero-glow">
              <h3 className="font-display text-xl font-bold group-hover:text-hero transition">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map(t => (
                  <span key={t} className="rounded-full border border-hero/40 bg-hero/10 px-2.5 py-0.5 text-xs font-semibold text-hero">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-3 text-sm">
                <a href="https://github.com/Stuti-M" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-hero">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href="https://github.com/Stuti-M" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-hero">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center italic text-muted-foreground">"That's my secret — I'm always coding."</p>
      </section>
    </div>
  );
}
