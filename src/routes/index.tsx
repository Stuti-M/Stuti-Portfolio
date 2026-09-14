import { useState } from "react";
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
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";
import { BlackWidowIcon, ShieldLogoIcon, ArcReactorIcon } from "../components/MarvelIcons";
import { EngineeringLogModal } from "../components/EngineeringLog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stuti Mohapatra | S.H.I.E.L.D. Protocol — Computer Science Engineer & Builder" },
      {
        name: "description",
        content:
          "Computer Science Engineering student building AI, software, and IoT systems through projects, internships, and hackathons.",
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
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <div className="theme-shield page-enter min-h-screen bg-background text-foreground bg-grid-subtle relative overflow-hidden">
      {/* 🛡️ S.H.I.E.L.D. Tactical Particles */}
      <MarvelFloatingParticles theme="shield" />

      {/* Atmospheric Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[550px] w-[850px] max-w-full rounded-full bg-primary/15 blur-[150px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-10 h-72 w-72 rounded-full bg-secondary/15 blur-[130px] neon-float"
      />

      <div className="relative mx-auto max-w-6xl px-3 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        {/* Top Personal Engineering Metadata Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-border/80 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-primary/30 bg-primary/10 text-primary font-bold">
              <ShieldLogoIcon className="h-3.5 w-3.5" />
              <span>STUTI.M // LEVEL 7 COMMAND CLEARANCE</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-card/60 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SYSTEM STATUS // ONLINE</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-muted-foreground">
              <span>VERSION // 2026.09</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>BHUBANESWAR, INDIA</span>
            </div>
            <button
              onClick={() => setIsLogOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold transition hover:bg-amber-500 hover:text-white"
            >
              <Terminal className="h-3 w-3" />
              <span>BUILD LOG // 03</span>
            </button>
          </div>
        </div>

        {/* Asymmetrical Engineering Hero Layout */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          {/* Left Column: Direct Builder Statement */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2 font-bold">
              01 // COMPUTER SCIENCE ENGINEER & BUILDER
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              STUTI MOHAPATRA
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground/90">
              I build systems that{" "}
              <span className="text-primary underline decoration-primary/40 decoration-2 underline-offset-4">
                turn ideas into working products.
              </span>
            </p>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              Computer Science Engineering undergraduate at Siksha 'O' Anusandhan University (2025–2029). Building at the intersection of on-device Edge AI, autonomous multi-agent systems, embedded IoT telemetry, and algorithms.
            </p>

            {/* Direct Project Bullets - Real Content, Not Generic Copy */}
            <div className="mt-6 space-y-2.5 font-mono text-xs max-w-xl">
              <div className="p-3 rounded-lg border border-border/80 bg-card/60 flex items-center justify-between">
                <span className="text-foreground">
                  <strong className="text-primary">BUILD_01:</strong> Offline Emergency Wearable (TinyML + ESP32 + LoRa)
                </span>
                <span className="text-[10px] text-amber-500 font-bold">ACTIVE</span>
              </div>
              <div className="p-3 rounded-lg border border-border/80 bg-card/60 flex items-center justify-between">
                <span className="text-foreground">
                  <strong className="text-primary">BUILD_02:</strong> Multi-Agent Deforestation Detection (Groq + n8n)
                </span>
                <span className="text-[10px] text-emerald-500 font-bold">2ND PLACE</span>
              </div>
              <div className="p-3 rounded-lg border border-border/80 bg-card/60 flex items-center justify-between">
                <span className="text-foreground">
                  <strong className="text-primary">BUILD_03:</strong> Civic Infrastructure GeoGrievance AI (CV + FastAPI)
                </span>
                <span className="text-[10px] text-sky-500 font-bold">DEVELOPING</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-mono font-bold text-primary-foreground shadow-sm transition hover:opacity-95 hover:scale-102 hero-glow"
              >
                <span>03 WORK // IRON MAN HUD 🦾</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/building"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-card/80 px-5 py-3 text-sm font-mono font-semibold text-foreground transition hover:border-primary hover:bg-muted/60"
              >
                <span>02 BUILD // SPIDER-MAN NETWORK 🕷️</span>
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </Link>
            </div>

            {/* Social Profile Links */}
            <div className="mt-8 flex items-center gap-4 text-muted-foreground border-t border-border/70 pt-6 max-w-lg font-mono text-xs">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={SOCIAL_LINKS.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right Column: S.H.I.E.L.D. Strategic Command Console Dashboard */}
          <div className="space-y-4">
            <div className="rounded-2xl border-2 border-primary/30 bg-card/90 p-6 shadow-sm backdrop-blur-md relative overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-muted-foreground ml-1">shield.command.ts</span>
                </div>
                <div className="text-primary font-bold flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  <span>CLEARANCE // LEVEL 7</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
                  <p className="text-muted-foreground text-[10px]">// Active Engineering Directive</p>
                  <p className="text-foreground mt-0.5">
                    <span className="text-primary font-semibold">const</span> mission ={" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "ship reliable systems from embedded edge to cloud"
                    </span>
                    ;
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg border border-border bg-background/50">
                    <p className="text-muted-foreground text-[9px]">MODE</p>
                    <p className="font-bold text-foreground mt-0.5">ENGINEERING</p>
                  </div>
                  <div className="p-2.5 rounded-lg border border-border bg-background/50">
                    <p className="text-muted-foreground text-[9px]">OBJECTIVE</p>
                    <p className="font-bold text-foreground mt-0.5">BUILD & SHIP</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-muted/20 border border-border/50 flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-[9px]">INTERNSHIP ALUMNUS</p>
                    <p className="font-bold text-primary mt-0.5">Paradip Port Authority (Govt of India)</p>
                  </div>
                  <Laptop className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
              <Link to="/achievements" className="p-3 rounded-xl border border-border bg-card/60 hover:border-primary transition">
                <p className="text-xl font-extrabold text-foreground">2×</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Podium Runner-up</p>
              </Link>
              <Link to="/experience" className="p-3 rounded-xl border border-border bg-card/60 hover:border-primary transition">
                <p className="text-xl font-extrabold text-foreground">1</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Govt Internship</p>
              </Link>
              <Link to="/projects" className="p-3 rounded-xl border border-border bg-card/60 hover:border-primary transition">
                <p className="text-xl font-extrabold text-foreground">3</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Featured Systems</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Marvel Engineering Worlds Grid */}
        <div className="mt-16 pt-12 border-t border-border/80">
          <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-6 text-center">
            ACCESS THE MARVEL CHARACTER WORLDS
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { to: "/projects", title: "WORK", hero: "Iron Man", cue: "Stark HUD & System Panels", emoji: "🦾", num: "03" },
              { to: "/building", title: "BUILD", hero: "Spider-Man", cue: "Kinetic Idea Network", emoji: "🕷️", num: "02" },
              { to: "/experience", title: "EXPERIENCE", hero: "Hulk", cue: "Gamma Impact & Govt Training", emoji: "💚", num: "04" },
              { to: "/skills", title: "SKILLS", hero: "Hawkeye", cue: "Precision Reticle & LeetCode", emoji: "🏹", num: "05" },
              { to: "/achievements", title: "ACHIEVEMENTS", hero: "Captain America", cue: "Shield Podiums & Wins", emoji: "🛡️", num: "06" },
              { to: "/about", title: "ABOUT", hero: "Thor", cue: "Asgardian Chronicle & Journey", emoji: "⚡", num: "07" },
              { to: "/contact", title: "CONTACT", hero: "Black Widow", cue: "Red Room Tactical Comms", isWidow: true, num: "08" },
              { action: () => setIsLogOpen(true), title: "ENGINEERING LOG", hero: "Private Journal", cue: "Developer Build Notes", isLog: true, num: "LOG" },
            ].map((card) => {
              const content = (
                <div className="p-4 rounded-xl border border-border bg-card/70 hover:border-primary hover:bg-card transition flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-primary font-bold">{card.num}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition" />
                    </div>
                    <h3 className="font-mono text-sm font-extrabold text-foreground group-hover:text-primary transition">
                      {card.title}
                    </h3>
                    <p className="font-mono text-[10px] text-primary font-semibold mt-0.5">{card.hero}</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-2">{card.cue}</p>
                </div>
              );

              if (card.action) {
                return (
                  <button key={card.title} onClick={card.action} className="text-left w-full">
                    {content}
                  </button>
                );
              }

              return (
                <Link key={card.title} to={card.to}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <EngineeringLogModal isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} />
    </div>
  );
}
