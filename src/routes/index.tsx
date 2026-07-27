import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import ironman from "@/assets/heroes/ironman.jpg.asset.json";
import ironmanBlueprint from "@/assets/heroes/ironman-blueprint.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stuti Mohapatra — CSE Student, Web Developer & AI Enthusiast" },
      { name: "description", content: "Stuti Mohapatra — Computer Science Engineering student. Web Developer, AI Enthusiast and Problem Solver building solutions that solve real problems." },
      { property: "og:title", content: "Stuti Mohapatra — Web Developer & AI Enthusiast" },
      { property: "og:description", content: "CSE student building AI-powered and real-world web products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const socials = [
  { icon: Github, href: "https://github.com/Stuti-M", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/stuti-mohapatra-180713392", label: "LinkedIn" },
  { icon: MessageSquare, href: "https://discord.com/users/stuti_k_73", label: "Discord" },
  { icon: Mail, href: "mailto:mstuti.official@gmail.com", label: "Gmail" },
];

function Home() {
  return (
    <div className="theme-ironman cursor-ironman min-h-[calc(100vh-5rem)] relative overflow-hidden">
      {/* Iron Man backdrop — armor + HUD blueprint, hot-rod red & gold */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={ironmanBlueprint.url} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-30" />
        <img src={ironman.url} alt="" className="absolute inset-0 h-full w-full object-cover object-right opacity-70 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.55_0.22_25/0.45),transparent_55%),radial-gradient(ellipse_at_bottom_right,oklch(0.78_0.16_78/0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-primary blur-[140px] opacity-50 neon-drift" />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-secondary blur-[140px] opacity-50 neon-drift" style={{ animationDelay: "-6s" }} />
        {/* Floating neon HUD glyphs — arc reactor sparks */}
        <div className="absolute top-[18%] left-[8%] h-3 w-3 rounded-full bg-cyan-300 neon-float text-cyan-300 neon-pulse" />
        <div className="absolute top-[70%] left-[12%] h-2 w-2 rounded-full bg-secondary neon-float-slow text-yellow-300 neon-pulse" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-[30%] right-[10%] h-4 w-4 rounded-full border-2 border-cyan-300 text-cyan-300 neon-float neon-pulse" />
        <div className="absolute top-[55%] right-[18%] h-2 w-2 rounded-full bg-red-500 text-red-500 neon-float-slow neon-pulse" style={{ animationDelay: "-5s" }} />
        <div className="absolute top-[85%] left-[45%] h-2.5 w-2.5 rounded-full bg-cyan-200 text-cyan-200 neon-float neon-pulse" style={{ animationDelay: "-2s" }} />
        {/* Floating code snippets */}
        <div className="absolute top-[24%] left-[4%] font-mono text-xs text-cyan-300/60 neon-float-slow">{"const build = () => impact;"}</div>
        <div className="absolute top-[60%] right-[6%] font-mono text-xs text-secondary/60 neon-float" style={{ animationDelay: "-4s" }}>{"if (problem) solve();"}</div>
        <div className="absolute bottom-[8%] left-[30%] font-mono text-xs text-red-400/50 neon-float-slow" style={{ animationDelay: "-2s" }}>{"model.fit(ideas, reality)"}</div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_auto] items-center gap-12">
          <div>
            <p className="mb-3 font-display text-sm tracking-[0.35em] text-secondary uppercase">
              Stark Industries × Portfolio Protocol
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95]">
              <span className="text-hero">STUTI</span>
              <br />
              <span className="text-secondary">MOHAPATRA</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Computer Science Engineering Student
            </p>
            <p className="mt-2 max-w-xl text-base text-foreground/80">
              <span className="text-hero font-semibold">Web Developer</span> •{" "}
              <span className="text-hero font-semibold">AI Enthusiast</span> •{" "}
              <span className="text-hero font-semibold">Problem Solver</span>
            </p>
            <blockquote className="mt-6 max-w-xl border-l-2 border-hero pl-4 font-display text-lg italic text-foreground/90">
              "I don't just learn technology. I build solutions that solve real problems."
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="rounded-md bg-hero px-6 py-3 font-display text-sm font-bold tracking-wider uppercase text-hero-foreground hero-glow transition hover:scale-105">
                View Projects →
              </Link>
              <Link to="/contact" className="rounded-md border-2 border-hero px-6 py-3 font-display text-sm font-bold tracking-wider uppercase text-hero transition hover:bg-hero hover:text-hero-foreground">
                Get In Touch
              </Link>
            </div>

            <div className="mt-8 flex gap-4">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-muted-foreground transition hover:-translate-y-0.5 hover:text-hero"
                >
                  <s.icon />
                </a>
              ))}
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
            <div key={s.k} className="rounded-lg border border-border bg-card/60 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-hero">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</p>
              <p className="mt-1 font-display text-xl font-bold text-hero">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
