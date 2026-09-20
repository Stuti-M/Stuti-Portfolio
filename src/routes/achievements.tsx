import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trophy, Award, Shield, Star, CheckCircle2, ShieldCheck } from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";
import { ShieldLogoIcon } from "../components/MarvelIcons";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Honors | Captain America Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Captain America Avenger 01 Protocol: Verified hackathon podiums, competitive programming milestones, and industry credentials.",
      },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <div className="theme-cap page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body">
      {/* 🛡️ Captain America Shield Particles */}
      <MarvelFloatingParticles theme="cap" />

      {/* Concentric Shield Rings Backdrop */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-14 opacity-15 select-none">
        {[560, 420, 280, 140].map((size, idx) => (
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
        {/* Cap Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-primary font-bold">
            <ShieldLogoIcon className="h-4 w-4 text-primary" />
            <span>AVENGER 01 PROTOCOL // VERIFIED PODIUMS & HONORS</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Shields Earned & Milestones
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-base leading-relaxed font-body">
            A documented track record of hackathon podium finishes, competitive algorithmic rankings, and governmental commendations.
          </p>
        </div>

        {/* Heroic Milestone Journey Tracker */}
        <div className="mb-8 rounded-2xl border border-primary/30 bg-card/60 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between font-mono text-[11px] mb-2 text-muted-foreground">
            <span className="flex items-center gap-2 text-primary font-bold">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              VERIFIED MILESTONE CHRONICLE
            </span>
            <span className="text-primary font-bold">DISCIPLINE // PROGRESS</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-bold">
              ★ MILESTONE 01: AGENTIC AI HACKATHON (2ND)
            </span>
            <span className="text-muted-foreground">→</span>
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-bold">
              ★ MILESTONE 02: SHECODEX ALGORITHMS (2ND)
            </span>
            <span className="text-muted-foreground">→</span>
            <span className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/30 text-primary font-bold">
              ★ MILESTONE 03: GOVT COMMENDATION
            </span>
          </div>
        </div>

        {/* Major Podium Cards Grid with Collectible Shield Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Podium 1: Anant Chakra Agentic AI Hackathon */}
          <div className="rounded-2xl border-2 border-amber-500/40 bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] relative overflow-hidden group cursor-pointer">
            {/* Shield Radial Highlight on Hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-2xl font-bold group-hover:scale-110 transition-transform">
                  🥈
                </div>
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                    ACHIEVEMENT_01
                  </span>
                  <p className="font-mono text-xs text-primary font-semibold">Chakravyuh & Genesis 2K26</p>
                </div>
              </div>

              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                <span>★</span>
                <span>2ND PLACE // RUNNER-UP</span>
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-foreground tracking-tight relative z-10">
              Anant Chakra Agentic AI Hackathon
            </h2>

            <p className="text-sm text-foreground/90 mt-4 leading-relaxed relative z-10">
              Designed and built <strong className="text-foreground">Sentinel-X</strong> — an autonomous multi-agent AI system for illegal deforestation detection using n8n orchestration and high-velocity Groq LLMs under tight hackathon sprint constraints.
            </p>

            <div className="mt-6 pt-4 border-t border-border/80 flex flex-wrap gap-2 relative z-10">
              {["Multi-Agent AI", "n8n", "Groq LLM", "Deforestation Defense"].map((t) => (
                <span key={t} className="chip-tech">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Podium 2: SheCodex Coding Challenge */}
          <div className="rounded-2xl border-2 border-amber-500/40 bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] relative overflow-hidden group cursor-pointer">
            {/* Shield Radial Highlight on Hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-2xl font-bold group-hover:scale-110 transition-transform">
                  🥈
                </div>
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                    ACHIEVEMENT_02
                  </span>
                  <p className="font-mono text-xs text-primary font-semibold">CODEX Club</p>
                </div>
              </div>

              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                <span>★</span>
                <span>2ND PLACE // PODIUM</span>
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-foreground tracking-tight relative z-10">
              SheCodex Women's Day Coding Challenge
            </h2>

            <p className="text-sm text-foreground/90 mt-4 leading-relaxed relative z-10">
              Podium finish testing algorithmic accuracy, optimal time/space complexity, data structure design, and speed across complex competitive coding challenges.
            </p>

            <div className="mt-6 pt-4 border-t border-border/80 flex flex-wrap gap-2 relative z-10">
              {["Data Structures", "Algorithms", "Competitive Coding", "Speed & Accuracy"].map((t) => (
                <span key={t} className="chip-tech">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Commendations & Certifications Section */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Government Commendation & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
              <span className="font-mono text-[10px] text-primary font-bold uppercase">
                FORMAL GOVERNMENT RECOGNITION
              </span>
              <h3 className="text-base font-bold text-foreground mt-1">
                Paradip Port Authority Commendation
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Formally appreciated in writing by the Executive Engineer, Planning & Design Cell (Govt of India), for diligence and disciplined technical execution.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-muted/20">
              <span className="font-mono text-[10px] text-muted-foreground font-bold uppercase">
                ENGINEERING CREDENTIAL
              </span>
              <h3 className="text-base font-bold text-foreground mt-1">
                Front-End Web Development Certified
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Verified foundations in semantic HTML5, modern CSS3 layouts, component architecture, and responsive interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/80 pt-6">
          <Link to="/skills" className="text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition">
            ← 05 SKILLS // Hawkeye Precision 🏹
          </Link>
          <Link to="/about" className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1">
            <span>07 ABOUT // Thor Asgardian Journey ⚡</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
