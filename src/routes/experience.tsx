import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Building2, Calendar, ShieldCheck, Zap, Award, Layers } from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience = Impact | Hulk Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Software Developer Intern at Paradip Port Authority (Govt of India Enterprise). Hands-on software workflows and technical execution.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="theme-hulk page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body">
      {/* 💚 Minimal Gamma Particles */}
      <MarvelFloatingParticles theme="hulk" />

      {/* Gamma Emerald & Violet Ambient Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-[550px] w-[800px] rounded-full bg-primary/15 blur-[150px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-secondary/15 blur-[130px] neon-float"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Header: Strong Typography & Impact Philosophy */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-primary font-bold">
            <span>💚 GAMMA CORE // INDUSTRY EXPERIENCE</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight uppercase leading-none">
            EXPERIENCE <span className="text-primary">=</span> IMPACT
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
            Real engineering execution inside a major Government of India enterprise. Hands-on systems development, enterprise workflows, and formal commendation.
          </p>
        </div>

        {/* Progressive Strength Timeline Track */}
        <div className="mb-6 rounded-2xl border border-primary/30 bg-card/60 p-4 backdrop-blur-sm shadow-xs">
          <div className="flex items-center justify-between font-mono text-[11px] mb-3 text-muted-foreground">
            <span className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400 font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              GROWTH & KINETIC PROGRESSION ENGINE
            </span>
            <span className="font-mono text-primary font-bold">STAGE // MAXIMUM IMPACT</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-xs text-center">
            <div className="p-2 rounded-lg border border-border bg-muted/30 text-muted-foreground">
              <span className="block text-[9px] text-muted-foreground/80 font-bold">STAGE 01</span>
              <span className="font-bold text-foreground">START</span>
              <div className="mt-1 h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500/40" />
              </div>
            </div>
            <div className="p-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-500 font-bold">
              <span className="block text-[9px] text-emerald-500/80">STAGE 02</span>
              <span>EXPERIENCE</span>
              <div className="mt-1 h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500/60" />
              </div>
            </div>
            <div className="p-2 rounded-lg border border-border bg-muted/30 text-muted-foreground">
              <span className="block text-[9px] text-muted-foreground/80 font-bold">STAGE 03</span>
              <span className="font-bold text-foreground">SKILLS</span>
              <div className="mt-1 h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500/70" />
              </div>
            </div>
            <div className="p-2 rounded-lg border border-border bg-muted/30 text-muted-foreground">
              <span className="block text-[9px] text-muted-foreground/80 font-bold">STAGE 04</span>
              <span className="font-bold text-foreground">ACHIEVEMENT</span>
              <div className="mt-1 h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500/85" />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 p-2 rounded-lg border border-primary/50 bg-primary/15 text-primary font-bold shadow-xs">
              <span className="block text-[9px] text-primary font-extrabold">STAGE 05</span>
              <span>STRONGER BUILD</span>
              <div className="mt-1 h-1 w-full bg-primary/30 rounded-full overflow-hidden">
                <div className="h-full w-full bg-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Large Impact Numbers Grid with Kinetic Landing */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-primary/40 bg-card/80 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] group cursor-default">
            <p className="font-mono text-[10px] uppercase text-muted-foreground font-semibold flex items-center justify-between">
              <span>ENTERPRISE</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-ping" />
            </p>
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-primary mt-1 group-hover:scale-105 transition-transform">01</p>
            <p className="text-xs text-foreground/80 font-bold mt-1">Govt of India Port Authority</p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] group cursor-default">
            <p className="font-mono text-[10px] uppercase text-muted-foreground font-semibold flex items-center justify-between">
              <span>PROGRAM DURATION</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-ping" />
            </p>
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mt-1 group-hover:scale-105 transition-transform">04</p>
            <p className="text-xs text-foreground/80 font-bold mt-1">Weeks Intensive Training</p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] group cursor-default">
            <p className="font-mono text-[10px] uppercase text-muted-foreground font-semibold flex items-center justify-between">
              <span>DELIVERABLES</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
            </p>
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1 group-hover:scale-105 transition-transform">100%</p>
            <p className="text-xs text-foreground/80 font-bold mt-1">Executed Under IT Manager</p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl border border-purple-500/30 bg-card/80 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] group cursor-default">
            <p className="font-mono text-[10px] uppercase text-purple-600 dark:text-purple-400 font-semibold flex items-center justify-between">
              <span>COMMENDATION</span>
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 group-hover:animate-ping" />
            </p>
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-purple-600 dark:text-purple-400 mt-1 group-hover:scale-105 transition-transform">LEVEL 1</p>
            <p className="text-xs text-foreground/80 font-bold mt-1">Executive Engineer Recognition</p>
          </div>
        </div>

        {/* Main Experience Dossier */}
        <div className="rounded-2xl border-2 border-primary/30 bg-card p-6 sm:p-10 shadow-sm relative overflow-hidden mb-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-border/80">
            <div>
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 uppercase">
                SOFTWARE DEVELOPER INTERN
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mt-3">
                Paradip Port Authority
              </h2>
              <p className="text-sm sm:text-base font-semibold text-primary mt-1">
                Government of India Enterprise — Electrical & Mechanical Department / Planning & Design Cell
              </p>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3.5 py-1.5 rounded-full border border-border bg-muted/60 text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>June 2026 — July 2026</span>
              </span>
              <p className="font-mono text-xs text-muted-foreground mt-1.5">Paradip, Odisha, India</p>
            </div>
          </div>

          {/* Core Impact Highlights */}
          <div className="mt-8 space-y-4">
            <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-muted/20 flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary font-mono text-xs font-bold">
                01
              </div>
              <div>
                <p className="font-bold text-foreground text-sm sm:text-base">
                  Hands-On Project Execution Under IT Leadership
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  Completed an intensive summer internship programme focusing on software workflows, database integration, and administrative IT infrastructure maintenance.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-muted/20 flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary font-mono text-xs font-bold">
                02
              </div>
              <div>
                <p className="font-bold text-foreground text-sm sm:text-base">
                  Enterprise Technical Collaboration with Tech Mahindra
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  Assisted in operational software project execution and workflow maintenance carried out in technical collaboration with Tech Mahindra engineers.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border-2 border-primary/40 bg-primary/5 flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono text-xs font-bold">
                ★
              </div>
              <div>
                <p className="font-bold text-primary text-sm sm:text-base">
                  Formal Executive Commendation
                </p>
                <p className="text-xs sm:text-sm text-foreground/90 mt-1 leading-relaxed font-medium">
                  Formally recognized and appreciated in writing by the Executive Engineer, Planning & Design Cell, for sincerity, diligence, and disciplined execution of all assigned engineering deliverables.
                </p>
              </div>
            </div>
          </div>

          {/* Competency Chips */}
          <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap gap-2">
            {[
              "Enterprise System Workflows",
              "Database Integration",
              "Technical Documentation",
              "Tech Mahindra Systems",
              "Govt IT Infrastructure",
              "Production Execution",
            ].map((skill) => (
              <span key={skill} className="chip-tech">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/80 pt-6">
          <Link to="/projects" className="text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition">
            ← 03 WORK // Iron Man Stark HUD 🦾
          </Link>
          <Link to="/skills" className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1">
            <span>05 SKILLS // Hawkeye Precision 🏹</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
