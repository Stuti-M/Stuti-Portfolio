import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trophy, Award, Shield, Star, GraduationCap } from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements | Captain America Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Verified hackathon podiums and competitive programming milestones for Stuti Mohapatra.",
      },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <div className="theme-cap page-enter min-h-screen py-24 px-4 sm:px-6 bg-grid-subtle relative overflow-hidden">
      {/* 🛡️ Captain America Shield Glowing Particles */}
      <MarvelFloatingParticles theme="cap" />

      {/* Shield Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/4 h-[550px] w-[750px] rounded-full bg-primary/15 blur-[140px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-secondary/15 blur-[120px] neon-float"
      />

      {/* Concentric Shield Rings Backdrop */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 opacity-15">
        {[520, 390, 260, 130].map((size, idx) => (
          <div
            key={size}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
              idx % 2 === 0 ? "border-secondary" : "border-primary"
            }`}
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🛡️</span>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              AVENGER 01 // VERIFIED PODIUMS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Shields Earned & Milestones
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-base">
            Documented wins across competitive hackathons, algorithmic contests, and engineering programmes.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Anant Chakra */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all hover:border-primary">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xl font-bold">
                🥈
              </div>
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                2ND PLACE / RUNNER-UP
              </span>
            </div>
            <h2 className="text-xl font-bold text-foreground">
              Anant Chakra Agentic AI Hackathon
            </h2>
            <p className="text-xs font-semibold text-primary mt-1">
              Chakravyuh & Genesis 2K26
            </p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Designed, architected, and shipped <strong className="text-foreground">Sentinel-X</strong> — an autonomous multi-agent AI system for illegal deforestation detection using n8n and Groq LLMs under time constraints.
            </p>
          </div>

          {/* Card 2: SheCodex */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all hover:border-primary">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xl font-bold">
                🥈
              </div>
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                2ND PLACE
              </span>
            </div>
            <h2 className="text-xl font-bold text-foreground">
              SheCodex Women's Day Coding Challenge
            </h2>
            <p className="text-xs font-semibold text-primary mt-1">
              CODEX Club
            </p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Podium finish testing speed, algorithmic correctness, data structure implementations, and competitive problem solving across complex problem sets.
            </p>
          </div>
        </div>

        {/* Certifications & Industry Recognition */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Industry Recognition & Credentials</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border/70 bg-muted/20">
              <p className="font-mono text-xs text-primary font-semibold uppercase">Govt Internship Commendation</p>
              <p className="text-sm font-bold text-foreground mt-1">Paradip Port Authority (Govt of India)</p>
              <p className="text-xs text-muted-foreground mt-1">
                Formally commended by Executive Engineer, Planning & Design Cell, for diligence and sincerity.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border/70 bg-muted/20">
              <p className="font-mono text-xs text-primary font-semibold uppercase">Front-End Development</p>
              <p className="text-sm font-bold text-foreground mt-1">Certified Web Engineering</p>
              <p className="text-xs text-muted-foreground mt-1">
                Semantic modern CSS, JavaScript interfaces, and responsive web systems.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/70 pt-6">
          <Link to="/skills" className="text-xs font-semibold text-muted-foreground hover:text-primary transition">
            ← View Skills & Toolbox 🏹
          </Link>
          <Link to="/about" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <span>Discover About & Journey ⚡</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
