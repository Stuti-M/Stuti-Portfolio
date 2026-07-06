import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import ironman from "@/assets/heroes/ironman.jpg.asset.json";
import ironmanBlueprint from "@/assets/heroes/ironman-blueprint.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stuti Mohapatra — Home" },
      { name: "description", content: "Web Developer & AI/ML Enthusiast. Python, Java, HTML/CSS. Building real-world tech." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="theme-ironman cursor-ironman min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* Iron Man backdrop — armor + HUD blueprint */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={ironman.url} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-40 mix-blend-screen" />
        <img src={ironmanBlueprint.url} alt="" className="absolute inset-0 h-full w-full object-cover object-right opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-primary blur-[140px] opacity-40" />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-secondary blur-[140px] opacity-40" />
      </div>


      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_auto] items-center gap-12">
          <div>
            <p className="mb-3 font-display text-sm tracking-[0.35em] text-secondary uppercase">
              Stark Industries × Portfolio Protocol
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95]">
              I am <span className="text-hero">STUTI</span>
              <br />
              <span className="text-secondary">MOHAPATRA</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Web Developer & AI/ML Enthusiast
            </p>
            <p className="mt-2 max-w-xl text-base text-foreground/80">
              <span className="text-hero font-semibold">Python</span> •{" "}
              <span className="text-hero font-semibold">Java</span> •{" "}
              <span className="text-hero font-semibold">HTML/CSS</span>
              <span className="mx-2 text-muted-foreground">|</span>
              Building Real-World Tech.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="rounded-md bg-hero px-6 py-3 font-display text-sm font-bold tracking-wider uppercase text-hero-foreground hero-glow transition hover:scale-105">
                Suit Up →
              </Link>
              <Link to="/contact" className="rounded-md border-2 border-hero px-6 py-3 font-display text-sm font-bold tracking-wider uppercase text-hero transition hover:bg-hero hover:text-hero-foreground">
                Hail Friday
              </Link>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://github.com/Stuti-M" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-hero transition"><Github /></a>
              <a href="https://www.linkedin.com/in/stuti-mohapatra-180713392" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-hero transition"><Linkedin /></a>
              <a href="mailto:mstuti.official@gmail.com" className="text-muted-foreground hover:text-hero transition"><Mail /></a>
            </div>
          </div>

          {/* Arc Reactor */}
          <div className="relative mx-auto">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full border-4 border-secondary/60" />
              <div className="absolute inset-4 rounded-full border-2 border-secondary/40" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-100 via-cyan-300 to-blue-600 arc-pulse" />
              <div className="absolute inset-16 rounded-full bg-white/90" />
              <div className="absolute inset-20 rounded-full bg-cyan-100 shadow-inner" />
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute inset-8 flex items-center justify-center" style={{ transform: `rotate(${i * 45}deg)` }}>
                  <div className="h-full w-1 bg-white/70 rounded-full" />
                </div>
              ))}
            </div>
            <p className="mt-4 text-center font-display text-xs tracking-[0.3em] text-secondary uppercase">Arc Reactor Online</p>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "Focus", v: "AI / ML" },
            { k: "Stack", v: "Full Stack" },
            { k: "Degree", v: "B.Tech CSE" },
            { k: "Class of", v: "2029" },
          ].map(s => (
            <div key={s.k} className="rounded-lg border border-border bg-card/60 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</p>
              <p className="mt-1 font-display text-xl font-bold text-hero">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
