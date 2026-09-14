import { createFileRoute, Link } from "@tanstack/react-router";
import { Laptop, Award, CheckCircle2, ArrowRight, Building2, Calendar, ShieldCheck } from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience | Hulk Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Software Developer Intern at Paradip Port Authority (Government of India).",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="theme-hulk page-enter min-h-screen py-24 px-4 sm:px-6 bg-grid-subtle relative overflow-hidden">
      {/* 💚 Hulk Gamma Floating Particles */}
      <MarvelFloatingParticles theme="hulk" />

      {/* Gamma Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/4 h-[550px] w-[750px] rounded-full bg-primary/15 blur-[140px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-secondary/20 blur-[130px] neon-float"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Experience Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">💚</span>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              GAMMA CORE // INDUSTRY EXPERIENCE
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Industry Internship & Impact
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-base">
            Hands-on software development training, enterprise workflows, and formal governmental recognition.
          </p>
        </div>

        {/* Experience Card */}
        <div className="rounded-2xl border-2 border-primary/30 bg-card p-6 sm:p-8 shadow-sm mb-12 relative overflow-hidden">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6 pb-6 border-b border-border/70">
            <div>
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                SOFTWARE DEVELOPER INTERN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
                Paradip Port Authority
              </h2>
              <p className="text-sm font-semibold text-primary mt-0.5">
                Government of India Enterprise
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Electrical & Mechanical Department / Planning & Design Cell
              </p>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1 rounded-full border border-border bg-muted/60 text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>June 2026 — July 2026 (4 Weeks)</span>
              </span>
              <p className="text-xs text-muted-foreground mt-1">Paradip, Odisha, India</p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-border/60 bg-muted/20">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Project Execution Under IT Manager: </strong>
                <span className="text-muted-foreground">
                  Completed a 4-week intensive summer internship training programme focusing on hands-on project execution, database workflows, and digital infrastructure integration.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-border/60 bg-muted/20">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Enterprise System Workflows: </strong>
                <span className="text-muted-foreground">
                  Assisted in project execution and software workflow maintenance carried out in technical collaboration with Tech Mahindra.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-primary/30 bg-primary/5">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-primary font-bold">Formal Executive Commendation: </strong>
                <span className="text-foreground/90 font-medium">
                  Formally recognized and appreciated by the Executive Engineer, Planning & Design Cell, for sincerity, diligence, and disciplined technical execution of all assigned deliverables.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/70 flex flex-wrap gap-2">
            {[
              "Enterprise Systems",
              "Software Workflows",
              "Project Execution",
              "Database Integration",
              "Government IT Infrastructure",
            ].map((t) => (
              <span key={t} className="chip-tech">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/70 pt-6">
          <Link to="/building" className="text-xs font-semibold text-muted-foreground hover:text-primary transition">
            ← View Currently Building 🛠️
          </Link>
          <Link to="/skills" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <span>Explore Skills & LeetCode 🏹</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
