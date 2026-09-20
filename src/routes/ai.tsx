import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Sparkles, ArrowRight, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { StutiAIModal } from "../components/StutiAIModal";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "STUTI AI // ASK MY PORTFOLIO — Portfolio Intelligence System" },
      {
        name: "description",
        content:
          "STUTI AI: Intelligent portfolio assistant for Stuti Mohapatra. Ask about projects, skills, experience, achievements, and technical journey.",
      },
      { property: "og:title", content: "STUTI AI // ASK MY PORTFOLIO — Portfolio Intelligence System" },
      {
        property: "og:description",
        content:
          "Explore Stuti Mohapatra's work, projects, hackathons, and technical systems through an interactive AI command console.",
      },
    ],
  }),
  component: AIPage,
});

function AIPage() {
  return (
    <div className="theme-shield page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body">
      {/* Tactical Ambient Floating Particles */}
      <MarvelFloatingParticles theme="shield" />

      {/* Atmospheric Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[550px] w-[850px] max-w-full rounded-full bg-primary/15 blur-[150px] neon-drift"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Top Header */}
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 font-mono text-xs text-primary font-bold">
            <Bot className="h-4 w-4" />
            <span>PORTFOLIO INTELLIGENCE ENGINE // LEVEL 7 CLEARANCE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            STUTI AI
          </h1>
          <p className="font-display text-xl sm:text-2xl font-bold text-primary mt-1">
            ASK MY PORTFOLIO
          </p>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base leading-relaxed font-body">
            Explore my work. Ask about my projects. Find what you're looking for. Built with a comprehensive knowledge base of all my engineering systems, hackathons, and experience.
          </p>
        </div>

        {/* Dedicated In-Page Console */}
        <StutiAIModal
          isOpen={true}
          onClose={() => {}}
          isDedicatedPage={true}
        />

        {/* Bottom Fast Route Links */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-6 font-mono text-xs">
          <Link to="/projects" className="text-muted-foreground hover:text-primary transition flex items-center gap-1.5">
            <span>03 WORK // Stark HUD</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link to="/experience" className="text-muted-foreground hover:text-primary transition flex items-center gap-1.5">
            <span>04 EXPERIENCE // Hulk Impact</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link to="/contact" className="text-primary font-bold hover:underline flex items-center gap-1.5">
            <span>08 CONTACT // Red Room Comms</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
