import { useState } from "react";
import { Bot, Sparkles, Terminal, ArrowRight, CornerDownLeft, ShieldCheck, Zap } from "lucide-react";
import { SUGGESTED_PROMPTS } from "../lib/stuti-ai-engine";

interface StutiAIHeroBannerProps {
  onOpen: (prompt?: string) => void;
}

/**
 * 1. HOMEPAGE / HERO SECTION ENTRY POINT CARD
 * Designed to fit the futuristic Marvel × cinematic developer aesthetic.
 * Clean, non-intrusive, visually impressive.
 */
export function StutiAIHeroBanner({ onOpen }: StutiAIHeroBannerProps) {
  const [hoveredPrompt, setHoveredPrompt] = useState<string | null>(null);

  const featuredPrompts = [
    "What is Stuti's strongest project?",
    "Explain Prabandh-Drishti.",
    "Tell me about her internship.",
    "Why should I hire Stuti?",
  ];

  return (
    <div className="relative rounded-2xl border-2 border-primary/40 bg-card/90 p-5 sm:p-7 shadow-lg backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary group">
      {/* Laser Scanning Line Animation on Top Border */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 group-hover:opacity-100"
      />

      {/* Subtle Arc Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500"
      />

      {/* Technical Corner Brackets */}
      <span className="absolute top-1.5 left-1.5 font-mono text-[9px] text-primary/40 group-hover:text-primary transition">┌</span>
      <span className="absolute top-1.5 right-1.5 font-mono text-[9px] text-primary/40 group-hover:text-primary transition">┐</span>
      <span className="absolute bottom-1.5 left-1.5 font-mono text-[9px] text-primary/40 group-hover:text-primary transition">└</span>
      <span className="absolute bottom-1.5 right-1.5 font-mono text-[9px] text-primary/40 group-hover:text-primary transition">┘</span>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left Side: System Details & Tagline */}
        <div className="space-y-2 max-w-xl">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 font-bold">
              <Bot className="h-3.5 w-3.5" />
              <span>STUTI AI</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-bold text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>● SYSTEM ONLINE</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-muted-foreground">
              CLEARANCE: LEVEL 7
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
              <span>ASK MY PORTFOLIO</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore my work. Ask about my projects. Find what you're looking for.
            </p>
          </div>
        </div>

        {/* Right Side: Launch Button */}
        <div className="shrink-0">
          <button
            onClick={() => onOpen()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-xs sm:text-sm font-mono font-bold text-primary-foreground shadow-md transition hover:scale-102 hover:opacity-95 hero-glow cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>LAUNCH STUTI AI CONSOLE</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Quick Interactive Prompt Pills */}
      <div className="mt-5 pt-4 border-t border-border/70 relative z-10">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2.5 flex items-center justify-between">
          <span>POPULAR RECRUITER & ENGINEER QUESTIONS:</span>
          <span className="hidden sm:inline text-primary font-bold">CLICK ANY TO ASK INSTANTLY →</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {featuredPrompts.map((question) => (
            <button
              key={question}
              onClick={() => onOpen(question)}
              onMouseEnter={() => setHoveredPrompt(question)}
              onMouseLeave={() => setHoveredPrompt(null)}
              className="text-left p-2.5 rounded-xl border border-border/80 bg-background/60 hover:border-primary hover:bg-card hover:text-primary transition font-mono text-xs flex items-center justify-between group/pill cursor-pointer shadow-2xs"
            >
              <span className="text-[11px] text-foreground/90 group-hover/pill:text-primary line-clamp-1">
                "{question}"
              </span>
              <CornerDownLeft className="h-3 w-3 text-muted-foreground group-hover/pill:text-primary shrink-0 ml-1 transition-transform group-hover/pill:translate-x-0.5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 2. FLOATING LAUNCHER HUD WIDGET
 * Persistent bottom launcher visible across all pages.
 * Highly aesthetic, minimalist, non-intrusive, futuristic Marvel HUD styling.
 */
export function StutiAIFloatingLauncher({ onOpen }: { onOpen: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Floating Tactical Pill Button */}
      <button
        onClick={onOpen}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="group relative flex items-center gap-2.5 rounded-full border-2 border-primary/50 bg-card/95 py-2.5 px-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] cursor-pointer"
        title="Open STUTI AI Portfolio Intelligence (Ctrl+K)"
        aria-label="Open STUTI AI Portfolio Intelligence"
      >
        {/* Glowing Tactical Ring */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 blur-xs group-hover:opacity-80 transition-opacity"
        />

        {/* AI Icon with Pulse */}
        <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/40 group-hover:scale-110 transition-transform">
          <Bot className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-background animate-pulse" />
        </div>

        {/* Label & Tagline */}
        <div className="relative text-left font-mono">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
              STUTI AI
            </span>
            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
              ● ONLINE
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground font-semibold">
            ASK MY PORTFOLIO
          </p>
        </div>

        {/* Shortcut hint */}
        <div className="relative hidden md:flex items-center text-[10px] font-mono text-muted-foreground border border-border/80 bg-muted/40 rounded px-1.5 py-0.5 ml-1">
          ⌘K
        </div>
      </button>
    </div>
  );
}
