import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Cpu, Code2, Bot, GraduationCap, ArrowRight, Compass, Compass as MethodIcon } from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";
import { MjolnirIcon } from "../components/MarvelIcons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Engineering Journey | Thor Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Thor Asgardian Chronicle: Builder background, engineering methodology, and academic journey of Stuti Mohapatra.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="theme-thor page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden">
      {/* ⚡ Thor Mjolnir Particles */}
      <MarvelFloatingParticles theme="thor" />

      {/* Atmospheric Deep Blue & Slate Ambient Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-[550px] w-[800px] rounded-full bg-primary/20 blur-[150px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/3 left-10 h-72 w-72 rounded-full bg-secondary/15 blur-[120px] lightning-flicker"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Thor Asgardian Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-primary font-bold">
            <MjolnirIcon className="h-4 w-4 text-primary" />
            <span>ASGARDIAN CHRONICLE // BUILDER PROFILE & PHILOSOPHY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
            Engineering & Journey
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            I am a Computer Science Engineering student based in Bhubaneswar, Odisha, India who learns by building real systems. I take ambiguous problems, deconstruct them into architectural layers, and turn ideas into working prototypes.
          </p>
        </div>

        {/* 3 Core Builder Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary transition group shadow-2xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20 mb-4 group-hover:scale-105 transition">
              <Cpu className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-extrabold text-foreground">01. BUILD</h2>
            <p className="font-mono text-xs text-primary mt-0.5">AI · Systems · IoT</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              Transforming software architectures and microcontroller firmware into reliable, working end-to-end applications and connected edge hardware.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary transition group shadow-2xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20 mb-4 group-hover:scale-105 transition">
              <Code2 className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-extrabold text-foreground">02. SOLVE</h2>
            <p className="font-mono text-xs text-primary mt-0.5">DSA · Complexity · Systems Logic</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              Practicing data structures and algorithmic complexity daily to engineer software that is memory-efficient and mathematically sound.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary transition group shadow-2xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20 mb-4 group-hover:scale-105 transition">
              <Bot className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-extrabold text-foreground">03. EXPLORE</h2>
            <p className="font-mono text-xs text-primary mt-0.5">Edge AI · TinyML · Mesh Relays</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              Researching autonomous multi-agent orchestration, on-device microcontroller intelligence, and decentralized offline communication.
            </p>
          </div>
        </div>

        {/* 6-Step Engineering Methodology */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">How I Build Systems</h2>
          </div>
          <p className="text-sm text-muted-foreground italic mb-6">
            "I like taking ambiguous constraints, deconstructing them into architectural layers, and shipping working prototypes."
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: "01", title: "UNDERSTAND", desc: "Deconstruct core constraints & latency targets" },
              { step: "02", title: "RESEARCH", desc: "Evaluate edge firmware & API schemas" },
              { step: "03", title: "PROTOTYPE", desc: "Rapid proof-of-concept on hardware/backend" },
              { step: "04", title: "BUILD", desc: "Production-grade code, types & telemetry" },
              { step: "05", title: "TEST", desc: "Stress edge cases & cellular deadzones" },
              { step: "06", title: "ITERATE", desc: "Measure inference latency & refine models" },
            ].map((p) => (
              <div
                key={p.step}
                className="p-3.5 rounded-xl border border-border bg-muted/20 flex flex-col justify-between"
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

        {/* Academic Journey Timeline */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12 shadow-2xs">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Academic & Experience Journey</h2>
          </div>

          <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-foreground">Siksha 'O' Anusandhan University (SOA)</h3>
                <span className="font-mono text-xs text-primary font-bold">2025 — 2029</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Bachelor of Technology — Computer Science & Engineering (Bhubaneswar, Odisha)
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-foreground">Paradip Port Authority (Govt of India)</h3>
                <span className="font-mono text-xs text-primary font-bold">June — July 2026</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Software Developer Intern — IT & Electrical/Mechanical Department
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-muted-foreground ring-4 ring-border" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-foreground">DAV Public School, Pokhariput</h3>
                <span className="font-mono text-xs text-muted-foreground">2023 — 2025</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Class XII — Science stream (Bhubaneswar, Odisha)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/80 pt-6">
          <Link to="/achievements" className="text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition">
            ← 06 ACHIEVEMENTS // Captain America 🛡️
          </Link>
          <Link to="/contact" className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1">
            <span>08 CONTACT // Black Widow Tactical 🕷️</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
