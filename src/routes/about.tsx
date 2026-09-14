import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Cpu, Code2, Bot, GraduationCap, ArrowRight, Compass } from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";
import { MjolnirIcon } from "../components/MarvelIcons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Journey | Thor Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Computer Science Engineering student at SOA University (2025–2029) and builder.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="theme-thor page-enter min-h-screen py-24 px-4 sm:px-6 bg-grid-subtle relative overflow-hidden">
      {/* ⚡ Thor Mjolnir & Thunder Floating Particles in Metallic Slate Grey */}
      <MarvelFloatingParticles theme="thor" />

      {/* Thunder & Uru Metallic Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-1/4 h-[550px] w-[800px] rounded-full bg-slate-500/15 blur-[140px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 left-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px] lightning-flicker"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* About Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <MjolnirIcon className="h-5 w-5 text-slate-400 dark:text-slate-300 drop-shadow-[0_0_8px_currentColor]" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              ASGARDIAN CHRONICLE // URU STEEL & BUILDER PROFILE
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            A Little About Me & Journey
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            I'm a Computer Science Engineering student based in Bhubaneswar, Odisha, India who learns by building. I enjoy breaking down difficult problems, experimenting with new technologies, and turning ideas into usable systems.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="p-6 rounded-2xl border border-border bg-card hover:border-slate-400 dark:hover:border-slate-500 transition group shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500/15 text-slate-700 dark:text-slate-300 border border-slate-500/20 mb-3 group-hover:scale-105 transition">
              <Cpu className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-foreground">BUILD</h2>
            <p className="text-xs text-primary font-mono mt-0.5">AI · Software · IoT</p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Transforming software ideas and hardware prototypes into functional end-to-end applications and connected edge devices.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card hover:border-slate-400 dark:hover:border-slate-500 transition group shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500/15 text-slate-700 dark:text-slate-300 border border-slate-500/20 mb-3 group-hover:scale-105 transition">
              <Code2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-foreground">SOLVE</h2>
            <p className="text-xs text-primary font-mono mt-0.5">DSA · Problem Solving · Systems</p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Deeply practicing data structures, algorithmic paradigms, and mathematical logic.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card hover:border-slate-400 dark:hover:border-slate-500 transition group shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500/15 text-slate-700 dark:text-slate-300 border border-slate-500/20 mb-3 group-hover:scale-105 transition">
              <Bot className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-foreground">EXPLORE</h2>
            <p className="text-xs text-primary font-mono mt-0.5">Agentic AI · Edge AI · Embedded</p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Researching multi-agent collaboration, TinyML models on microcontrollers, and decentralized meshes.
            </p>
          </div>
        </div>

        {/* How I Build (6-Step Engineering Methodology) */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">How I Build</h2>
          </div>
          <p className="text-sm text-muted-foreground italic mb-6">
            "I like taking ambiguous problems, breaking them into systems, and turning ideas into working prototypes."
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: "01", title: "UNDERSTAND", desc: "Deconstruct the core constraint & user need" },
              { step: "02", title: "RESEARCH", desc: "Evaluate architectures & state-of-the-art" },
              { step: "03", title: "PROTOTYPE", desc: "Rapid proof-of-concept on edge / software" },
              { step: "04", title: "BUILD", desc: "Production-quality code, schemas & APIs" },
              { step: "05", title: "TEST", desc: "Stress edge cases & failure states" },
              { step: "06", title: "ITERATE", desc: "Measure performance & continuously refine" },
            ].map((p) => (
              <div
                key={p.step}
                className="p-3.5 rounded-xl border border-slate-300/50 dark:border-slate-700/50 bg-slate-500/5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-primary">{p.step}</span>
                  <h3 className="font-display text-xs font-bold text-foreground mt-0.5">{p.title}</h3>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Journey Timeline */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-5 w-5 text-slate-500 dark:text-slate-300" />
            <h2 className="text-xl font-bold text-foreground">Academic & Career Journey</h2>
          </div>

          <div className="relative border-l-2 border-slate-400/50 dark:border-slate-600/50 pl-6 space-y-8">
            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-slate-500 ring-4 ring-slate-400/20" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-foreground">Siksha 'O' Anusandhan University (SOA)</h3>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-bold">2025 — 2029</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Bachelor of Technology — Computer Science & Engineering
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-slate-500 ring-4 ring-slate-400/20" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-foreground">Paradip Port Authority (Govt of India)</h3>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-bold">June — July 2026</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Software Developer Intern — IT & Electrical/Mechanical Department
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-slate-400/60 ring-4 ring-slate-400/20" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-foreground">DAV Public School, Pokhariput</h3>
                <span className="font-mono text-xs text-muted-foreground">2023 — 2025</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Class XII — Science stream
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/70 pt-6">
          <Link to="/achievements" className="text-xs font-semibold text-muted-foreground hover:text-primary transition">
            ← View Achievements 🛡️
          </Link>
          <Link to="/contact" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <span>Direct Contact & Inquiries ⧗</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
