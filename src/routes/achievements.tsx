import { createFileRoute } from "@tanstack/react-router";
import { Award, Shield, Star } from "lucide-react";
import cap from "@/assets/heroes/cap.jpg.asset.json";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Stuti Mohapatra" },
      { name: "description", content: "SheCodex and Annata Chakra — recognitions and highlights." },
    ],
  }),
  component: Achievements,
});

const items = [
  {
    title: "SheCodex",
    tag: "Women in Tech",
    body: "Recognized participant in SheCodex — a community-driven initiative championing women in technology. Contributed to collaborative builds, learning circles, and cross-team engineering challenges.",
  },
  {
    title: "Annata Chakra",
    tag: "Innovation & Impact",
    body: "Featured contributor to Annata Chakra — a program spotlighting purposeful, real-world technology projects with community impact. Delivered on-the-ground solutions with cross-functional teamwork.",
  },
];

function Achievements() {
  return (
    <div className="theme-cap cursor-cap min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* Captain America backdrop — blueprint tech, red/white/blue */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={cap.url} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.35_0.15_250/0.55),transparent_60%),radial-gradient(ellipse_at_bottom,oklch(0.5_0.2_20/0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_120px,oklch(0.98_0_0/0.04)_120px_121px)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-hero blur-[140px] opacity-40" />
      </div>


      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-14">
          <p className="font-display text-sm tracking-[0.35em] text-hero uppercase flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" /> On Your Left
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-black">
            Shields <span className="text-hero">Earned</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            "The price of freedom is high — but the wins along the way? Priceless."
          </p>
        </div>

        {/* Captain America Shield */}
        <div className="flex justify-center mb-16">
          <div className="relative h-56 w-56">
            <div className="absolute inset-0 rounded-full bg-red-600 shadow-2xl" />
            <div className="absolute inset-4 rounded-full bg-white" />
            <div className="absolute inset-8 rounded-full bg-red-600" />
            <div className="absolute inset-14 rounded-full bg-blue-800 flex items-center justify-center">
              <Star className="h-16 w-16 text-white fill-white" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map(it => (
            <article key={it.title} className="group relative rounded-xl border border-border bg-card/70 p-6 backdrop-blur transition hover:border-hero hover:hero-glow">
              <div className="flex items-start justify-between mb-3">
                <Award className="h-8 w-8 text-hero" />
                <span className="rounded-full border border-hero/40 bg-hero/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-hero">
                  {it.tag}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold">{it.title}</h2>
              <p className="mt-3 text-muted-foreground">{it.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.linkedin.com/in/stuti-mohapatra-180713392"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-hero px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-hero transition hover:bg-hero hover:text-hero-foreground"
          >
            More on LinkedIn →
          </a>
        </div>
      </section>
    </div>
  );
}
