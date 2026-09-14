import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, ExternalLink, Bot, TreePine, ShieldAlert, Workflow, Radio, Sparkles } from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Work | Spider-Man Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Selected engineering builds across Edge AI, Multi-Agent LLMs, Embedded Systems and DSA.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="theme-spiderman page-enter min-h-screen py-24 px-4 sm:px-6 bg-grid-subtle relative overflow-hidden">
      {/* 🕷️ Spider-Man Floating Glowing Web Particles */}
      <MarvelFloatingParticles theme="spiderman" />

      {/* Spider-Man Ambient Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-1/4 h-[500px] w-[700px] rounded-full bg-primary/15 blur-[140px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-10 h-72 w-72 rounded-full bg-secondary/15 blur-[120px] neon-float"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Header with Spider-Man Theme */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🕷️</span>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              PARKER PROTOCOL // SELECTED WORK
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Engineering Projects & Systems
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-base">
            Detailed case studies across Edge AI, Multi-Agent LLMs, Embedded Systems, and Algorithmic Problem Solving.
          </p>
        </div>

        <div className="space-y-8">
          {/* PROJECT 01: SMART SAFETY WATCH */}
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary hover:shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  PROJECT 01
                </span>
                <span className="text-xs font-mono text-muted-foreground">AI × IoT × Edge Computing</span>
              </div>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                ● In Development
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              SMART SAFETY WATCH
            </h2>
            <p className="text-sm font-semibold text-primary mt-1">
              AI-powered offline emergency wearable with decentralized mesh routing.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
              A wearable system combining TinyML, embedded systems and offline LoRa mesh communication to detect emergency situations and route alerts without relying on internet connectivity.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-border/70 bg-muted/20">
                <p className="font-mono text-xs text-primary font-semibold uppercase">Autonomous Intelligence</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Detects emergency signatures locally without requiring manual buttons or continuous internet.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border/70 bg-muted/20">
                <p className="font-mono text-xs text-primary font-semibold uppercase">Offline Mesh Network</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Emergency payloads travel across a LoRa mesh network even in complete cellular blackouts.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border/70 bg-muted/20">
                <p className="font-mono text-xs text-primary font-semibold uppercase">Backend Infrastructure</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Java Spring Boot + MQTT brokers for telemetry ingestion and instantaneous alert dispatch.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
              <div className="flex flex-wrap gap-1.5">
                {["TinyML", "ESP32", "Embedded C++", "LoRa Mesh", "Spring Boot", "MQTT"].map((t) => (
                  <span key={t} className="chip-tech">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/building"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>View Full Lab Architecture 🛠️</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          {/* PROJECT 02: SENTINEL-X */}
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary hover:shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  PROJECT 02
                </span>
                <span className="text-xs font-mono text-muted-foreground">Multi-Agent AI System</span>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                🥈 2nd Place — Anant Chakra Hackathon
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              SENTINEL-X
            </h2>
            <p className="text-sm font-semibold text-primary mt-1">
              Multi-Agent AI System for Illegal Deforestation Detection
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
              Real-time multi-agent AI system for illegal deforestation detection using n8n, Groq LLMs and autonomous agent orchestration. Breaks down acoustic and spatial forest telemetry across specialized autonomous agents to deliver verifiable anomaly alerts.
            </p>

            {/* Autonomous Multi-Agent Visual Pipeline */}
            <div className="mt-6 p-4 rounded-xl border border-border/80 bg-muted/20">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                AUTONOMOUS AGENT PIPELINE
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center">
                <div className="p-2.5 rounded-lg border border-border bg-card">
                  <TreePine className="h-4 w-4 text-emerald-500 mx-auto mb-1" />
                  <p className="font-mono text-xs font-bold">FOREST DATA</p>
                  <p className="text-[10px] text-muted-foreground">Sensor Ingestion</p>
                </div>
                <div className="hidden sm:block text-muted-foreground font-mono text-xs">→</div>
                <div className="p-2.5 rounded-lg border border-border bg-card">
                  <Bot className="h-4 w-4 text-primary mx-auto mb-1" />
                  <p className="font-mono text-xs font-bold">AGENT 01</p>
                  <p className="text-[10px] text-muted-foreground">Acoustic Detection</p>
                </div>
                <div className="hidden sm:block text-muted-foreground font-mono text-xs">→</div>
                <div className="p-2.5 rounded-lg border border-border bg-card">
                  <Sparkles className="h-4 w-4 text-secondary mx-auto mb-1" />
                  <p className="font-mono text-xs font-bold">AGENT 02</p>
                  <p className="text-[10px] text-muted-foreground">Spatial Analysis</p>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center">
                <div className="sm:col-start-2 p-2.5 rounded-lg border border-border bg-card">
                  <Workflow className="h-4 w-4 text-amber-500 mx-auto mb-1" />
                  <p className="font-mono text-xs font-bold">AGENT 03</p>
                  <p className="text-[10px] text-muted-foreground">Autonomous Decision</p>
                </div>
                <div className="hidden sm:block text-muted-foreground font-mono text-xs">→</div>
                <div className="p-2.5 rounded-lg border border-red-500/30 bg-red-500/10 sm:col-span-2">
                  <ShieldAlert className="h-4 w-4 text-red-500 mx-auto mb-1" />
                  <p className="font-mono text-xs font-bold text-red-600 dark:text-red-400">ALERT & ESCALATION</p>
                  <p className="text-[10px] text-muted-foreground">Actionable Forest Ranger Dispatch</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
              <div className="flex flex-wrap gap-1.5">
                {["n8n", "Groq LLMs", "Multi-Agent AI", "Agent Orchestration", "Python"].map((t) => (
                  <span key={t} className="chip-tech">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Stuti-M"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <Github className="h-3.5 w-3.5" />
                <span>View on GitHub</span>
              </a>
            </div>
          </article>

          {/* PROJECT 03: SHECODEX */}
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary hover:shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  PROJECT 03
                </span>
                <span className="text-xs font-mono text-muted-foreground">Competitive Programming & Problem Solving</span>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                🥈 2nd Place — SheCodex Challenge
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              SHECODEX CODING CHALLENGE
            </h2>
            <p className="text-sm font-semibold text-primary mt-1">
              Women's Day Competitive Coding Challenge — CODEX Club
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
              Competitive coding achievement demonstrating algorithmic problem-solving, clean logic, and optimized time/space complexity execution under strict contest constraints.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl border border-border/70 bg-muted/20">
                <p className="font-mono text-xs font-semibold text-foreground">Algorithmic Efficiency</p>
                <p className="text-xs text-muted-foreground mt-0.5">Optimized time and memory limits.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-border/70 bg-muted/20">
                <p className="font-mono text-xs font-semibold text-foreground">Data Structures</p>
                <p className="text-xs text-muted-foreground mt-0.5">Trees, Graphs, DP & Hash Tables.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-border/70 bg-muted/20">
                <p className="font-mono text-xs font-semibold text-foreground">Clean Implementation</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tested against rigorous edge cases.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
              <div className="flex flex-wrap gap-1.5">
                {["Java", "Python", "Data Structures", "Algorithms", "Problem Solving"].map((t) => (
                  <span key={t} className="chip-tech">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/skills"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>View Live LeetCode Progress 🏹</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-border/70 pt-6">
          <Link to="/" className="text-xs font-semibold text-muted-foreground hover:text-primary transition">
            ← Return to SHIELD HQ 🛡️
          </Link>
          <Link to="/building" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <span>Explore Building Lab 🛠️</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
