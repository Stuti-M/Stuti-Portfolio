import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Code2,
  Workflow,
  Laptop,
  Shield,
  ShieldCheck,
  Radio,
} from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";
import { BlackWidowIcon, ShieldLogoIcon } from "../components/MarvelIcons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stuti Mohapatra | S.H.I.E.L.D. Protocol — Computer Science Engineer & Builder" },
      {
        name: "description",
        content:
          "Computer Science Engineering student building AI, software and IoT systems through projects, internships and hackathons.",
      },
      { property: "og:title", content: "Stuti Mohapatra | S.H.I.E.L.D. Protocol — Computer Science Engineer & Builder" },
      {
        property: "og:description",
        content:
          "I build systems that turn ideas into working products. Computer Science Engineering student building at the intersection of AI, software, IoT and real-world problem solving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const SOCIAL_LINKS = {
  github: "https://github.com/Stuti-M",
  linkedin: "https://www.linkedin.com/in/stuti-mohapatra-180713392",
  discord: "https://discord.com/users/stuti_k_73",
  email: "mailto:mstuti.official@gmail.com",
  phone: "tel:+917847971447",
  leetcode: "https://leetcode.com/u/Stuti_Mohapatra/",
};

function HomePage() {
  return (
    <div className="theme-shield page-enter min-h-screen bg-background text-foreground bg-grid-subtle relative overflow-hidden">
      {/* 🛡️ S.H.I.E.L.D. Glowing Moving Outer-Gutter Themed Icons */}
      <MarvelFloatingParticles theme="shield" />

      {/* S.H.I.E.L.D. Helicarrier Atmospheric Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[550px] w-[850px] max-w-full rounded-full bg-primary/15 blur-[140px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 right-10 h-72 w-72 rounded-full bg-secondary/15 blur-[120px] neon-float"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Top Status & S.H.I.E.L.D. Command Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1 text-xs font-medium backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-muted-foreground">Open to Engineering Roles & AI Builds</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
              <ShieldLogoIcon className="h-3.5 w-3.5" />
              <span>S.H.I.E.L.D. HELICARRIER HQ // STRATEGIC DEFENSE</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>Bhubaneswar, Odisha, India</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-semibold">
              00 // S.H.I.E.L.D. SPECIALIST & BUILDER
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.06]">
              STUTI MOHAPATRA
            </h1>

            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground/90">
              I build systems that{" "}
              <span className="text-primary underline decoration-secondary/50 decoration-2 underline-offset-4">
                turn ideas into working products.
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Computer Science Engineering student building at the intersection of AI, software, IoT and real-world problem solving.
            </p>

            {/* Domain Chips */}
            <div className="mt-6 flex flex-wrap gap-2 items-center">
              {["AI / ML", "FULL-STACK", "IoT", "EDGE AI", "DSA"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md border border-border bg-card/60 text-foreground/80 hover:border-primary hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Main Action CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-sm transition hover:opacity-95 hover:scale-[1.02] hero-glow"
              >
                <span>Explore Selected Work 🕷️</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/building"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-card/80 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-muted/60"
              >
                <span>Currently Building 🛠️</span>
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </Link>
            </div>

            {/* Social Profile Links */}
            <div className="mt-8 flex items-center gap-4 text-muted-foreground border-t border-border/60 pt-6 max-w-lg">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium hover:text-primary transition"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium hover:text-primary transition"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={SOCIAL_LINKS.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium hover:text-primary transition"
              >
                <Code2 className="h-4 w-4" />
                <span>LeetCode</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium hover:text-primary transition"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Discord</span>
              </a>
            </div>
          </div>

          {/* Right: S.H.I.E.L.D. Strategic Command Console */}
          <div className="relative">
            <div className="rounded-2xl border border-border/90 bg-card p-6 shadow-sm backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs text-muted-foreground ml-2">shield.hq.ts</span>
                </div>
                <div className="font-mono text-xs text-primary font-bold flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>LEVEL 7 // VERIFIED</span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
                  <p className="text-muted-foreground">// Engineering Directives</p>
                  <p className="text-foreground mt-1">
                    <span className="text-primary font-semibold">const</span> mission ={" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "turn ambiguous problems into working systems"
                    </span>
                    ;
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg border border-border/50 bg-background/50">
                    <p className="text-muted-foreground text-[10px]">TACTICAL DOMAIN</p>
                    <p className="font-semibold text-foreground mt-0.5">TinyML + Multi-Agent</p>
                  </div>
                  <div className="p-2.5 rounded-lg border border-border/50 bg-background/50">
                    <p className="text-muted-foreground text-[10px]">DECENTRALIZED</p>
                    <p className="font-semibold text-foreground mt-0.5">ESP32 + LoRa Mesh</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-muted/30 border border-border/40 flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-[10px]">COMMAND CLEARANCE</p>
                    <p className="font-semibold text-primary mt-0.5">Strategic Homeland Defense</p>
                  </div>
                  <ShieldLogoIcon className="h-7 w-7 text-primary" />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border/70 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-muted-foreground">{`{ AI }`}</span>
                <span className="text-muted-foreground">{`< IoT />`}</span>
                <span className="text-primary font-semibold">{`[ BUILD ]`}</span>
                <span className="text-muted-foreground">01 // PROTOTYPE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Credibility Highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <Link
            to="/achievements"
            className="p-5 rounded-xl border border-border bg-card/70 flex items-start gap-4 transition hover:border-primary/50 hover:shadow-xs group"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-2xl font-bold">
              🥈
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-primary transition">
                2×
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                Hackathon / Challenge Runner-up
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Anant Chakra Agentic AI & SheCodex 🛡️
              </p>
            </div>
          </Link>

          <Link
            to="/experience"
            className="p-5 rounded-xl border border-border bg-card/70 flex items-start gap-4 transition hover:border-primary/50 hover:shadow-xs group"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Laptop className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-primary transition">
                1
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                Industry Internship
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Paradip Port Authority (Govt of India) 💚
              </p>
            </div>
          </Link>

          <Link
            to="/projects"
            className="p-5 rounded-xl border border-border bg-card/70 flex items-start gap-4 transition hover:border-primary/50 hover:shadow-xs group"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
              <Workflow className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-primary transition">
                3
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                Featured Builds
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Smart Wearables, Multi-Agent AI & DSA 🕷️
              </p>
            </div>
          </Link>
        </div>

        {/* Marvel Worlds Navigation Portal Grid */}
        <div className="mt-16 pt-12 border-t border-border/70">
          <p className="font-mono text-xs uppercase tracking-widest text-primary font-semibold mb-6 text-center">
            EXPLORE THE MARVEL ENGINEERING WORLDS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { to: "/projects", title: "Selected Work", hero: "Spider-Man", emoji: "🕷️", desc: "Wearables, Multi-Agent AI & DSA" },
              { to: "/building", title: "Currently Building", hero: "Iron Man Lab", emoji: "🛠️", desc: "7-step decentralized IoT flow" },
              { to: "/experience", title: "Industry Experience", hero: "Hulk", emoji: "💚", desc: "Paradip Port Authority Govt training" },
              { to: "/skills", title: "Toolbox & LeetCode", hero: "Hawkeye", emoji: "🏹", desc: "Live problem solving & stack" },
              { to: "/achievements", title: "Podiums & Wins", hero: "Captain America", emoji: "🛡️", desc: "2nd place hackathon & coding" },
              { to: "/about", title: "About & Journey", hero: "Thor", emoji: "⚡", desc: "Education & engineering pillars" },
              { to: "/contact", title: "Direct Contact", hero: "Black Widow", isWidow: true, desc: "Reach out via email or socials" },
              { to: "mailto:mstuti.official@gmail.com", title: "Request Resume", hero: "S.H.I.E.L.D. Protocol", isShield: true, desc: "Direct resume email dispatch" },
            ].map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="p-4 rounded-xl border border-border bg-card/60 hover:border-primary hover:bg-card transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-lg mb-2">
                    {card.isWidow ? (
                      <BlackWidowIcon className="h-5 w-5 text-red-500" />
                    ) : card.isShield ? (
                      <ShieldLogoIcon className="h-5 w-5 text-primary" />
                    ) : (
                      <span>{card.emoji}</span>
                    )}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition">{card.title}</h3>
                  <p className="font-mono text-[10px] text-primary mt-0.5">{card.hero}</p>
                </div>
                <p className="text-[11px] text-muted-foreground mt-2">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
