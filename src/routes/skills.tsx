import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import widow from "@/assets/heroes/widow.jpg.asset.json";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Stuti Mohapatra" },
      { name: "description", content: "Languages, frameworks, tools and concepts — Python, Java, React, TailwindCSS, Node.js, Git, n8n, Groq LLM, DSA and AI workflows." },
      { property: "og:title", content: "Skills — Stuti Mohapatra" },
      { property: "og:description", content: "Languages, frameworks, tools and concepts behind Stuti Mohapatra's builds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

const groups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python", "Java", "HTML", "CSS", "JavaScript"] },
  { title: "Frameworks", items: ["React", "TailwindCSS", "Node.js"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "n8n", "Groq LLM", "Figma"] },
  { title: "Concepts", items: ["DSA", "Responsive Design", "REST APIs", "AI Workflows"] },
];

function Skills() {
  return (
    <div className="theme-widow cursor-widow min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* Black Widow backdrop — crimson & obsidian */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={widow.url} alt="" className="absolute inset-0 h-full w-full object-cover object-right opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,oklch(0.45_0.22_20/0.5),transparent_55%),radial-gradient(ellipse_at_left,oklch(0.15_0.01_260/0.7),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-hero blur-[140px] opacity-50 neon-drift" />
        {/* Floating crimson tracers */}
        <div className="absolute top-[16%] left-[10%] h-3 w-3 rounded-full bg-red-500 text-red-500 neon-float neon-pulse" />
        <div className="absolute top-[42%] left-[6%] h-2 w-2 rounded-full bg-red-400 text-red-400 neon-float-slow neon-pulse" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-[70%] left-[14%] h-2.5 w-2.5 rounded-full bg-orange-500 text-orange-500 neon-float neon-pulse" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-[28%] right-[8%] h-4 w-4 rounded-full border-2 border-red-500 text-red-500 neon-float-slow neon-pulse" style={{ animationDelay: "-5s" }} />
        <div className="absolute top-[82%] right-[28%] h-1.5 w-1.5 rounded-full bg-red-300 text-red-300 neon-float neon-pulse" style={{ animationDelay: "-1s" }} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <p className="font-display text-sm tracking-[0.35em] text-hero uppercase flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Widow's Arsenal
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-black">
            The <span className="text-hero">Toolkit</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            No boring progress bars — just the stack I actually build with, day in and day out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map(g => (
            <div key={g.title} className="rounded-xl border border-border bg-card/70 p-6 backdrop-blur transition hover:border-hero">
              <h2 className="font-display text-xl font-bold mb-4">{g.title}</h2>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map(name => (
                  <span
                    key={name}
                    className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-hero hover:text-hero hover:hero-glow"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
