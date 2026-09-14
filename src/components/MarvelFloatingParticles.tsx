import {
  BlackWidowIcon,
  ArcReactorIcon,
  SpiderWebIcon,
  MjolnirIcon,
  CapShieldIcon,
  GammaIcon,
  HawkeyeTargetIcon,
  ShieldLogoIcon,
} from "./MarvelIcons";
import {
  Sparkles,
  Zap,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Target,
  Activity,
  Radio,
  Binary,
  Star,
  Cpu,
  Radar,
  Satellite,
  Terminal,
  Crosshair,
  Flame,
  Layers,
  Compass,
} from "lucide-react";

export type MarvelThemeType = "shield" | "ironman" | "spiderman" | "building" | "hulk" | "hawkeye" | "cap" | "thor" | "widow";

interface MarvelFloatingParticlesProps {
  theme: MarvelThemeType;
}

export function MarvelFloatingParticles({ theme }: MarvelFloatingParticlesProps) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* ─────────────────────────────────────────────────────────────
          0. 🛡️ S.H.I.E.L.D. HELICARRIER HQ (Homepage)
          Dimmed ambient tactical shields & telemetry in outer gutters
      ────────────────────────────────────────────────────────────── */}
      {theme === "shield" && (
        <>
          {/* Far Left Gutter */}
          <div className="absolute top-[8%] left-[2%] text-primary neon-float neon-pulse opacity-30 dark:opacity-35">
            <ShieldLogoIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[24%] left-[3%] text-cyan-400 neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2s" }}>
            <Radar className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[40%] left-[1.5%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4s" }}>
            <ShieldLogoIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[56%] left-[3%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-1.5s" }}>
            <ShieldCheck className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[72%] left-[1.8%] text-cyan-300 neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.5s" }}>
            <Satellite className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] left-[2.5%] text-primary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-5s" }}>
            <ShieldLogoIcon className="h-7 w-7 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[94%] left-[1.5%] text-secondary neon-float opacity-20 dark:opacity-25" style={{ animationDelay: "-2.5s" }}>
            <span className="font-mono text-[9px] tracking-widest text-primary/70 font-bold">{"[ LVL-7 // CLEARANCE ]"}</span>
          </div>

          {/* Far Right Gutter */}
          <div className="absolute top-[9%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1.2s" }}>
            <ShieldLogoIcon className="h-9 w-9 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[26%] right-[3%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.2s" }}>
            <Shield className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[42%] right-[1.8%] text-cyan-400 neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-5.2s" }}>
            <Radio className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[58%] right-[3%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-2.2s" }}>
            <ShieldLogoIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[74%] right-[1.8%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-4.2s" }}>
            <ShieldAlert className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[89%] right-[2.5%] text-cyan-400 neon-float opacity-30 dark:opacity-35" style={{ animationDelay: "-1.8s" }}>
            <ShieldLogoIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[95%] right-[1.5%] text-primary neon-float-slow opacity-20 dark:opacity-25" style={{ animationDelay: "-3.8s" }}>
            <span className="font-mono text-[9px] tracking-widest text-secondary/70 font-bold">{"[ TRISKELION // HQ ]"}</span>
          </div>

          {/* Extreme Top & Bottom Outer Margins */}
          <div className="absolute top-[3%] left-[12%] text-primary/40 neon-float opacity-25">
            <Shield className="h-5 w-5 drop-shadow-[0_0_6px_currentColor]" />
          </div>
          <div className="absolute top-[3%] right-[12%] text-secondary/40 neon-float-slow opacity-25" style={{ animationDelay: "-3s" }}>
            <Radar className="h-5 w-5 drop-shadow-[0_0_6px_currentColor]" />
          </div>
          <div className="absolute bottom-[3%] left-[14%] text-cyan-400/40 neon-float opacity-20" style={{ animationDelay: "-2s" }}>
            <Radio className="h-5 w-5 drop-shadow-[0_0_6px_currentColor]" />
          </div>
          <div className="absolute bottom-[3%] right-[14%] text-primary/40 neon-float-slow opacity-20" style={{ animationDelay: "-4.5s" }}>
            <ShieldLogoIcon className="h-5 w-5 drop-shadow-[0_0_6px_currentColor]" />
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          1. 🦾 IRON MAN THEME PARTICLES (Outer margins)
      ────────────────────────────────────────────────────────────── */}
      {theme === "ironman" && (
        <>
          {/* Left Gutter */}
          <div className="absolute top-[9%] left-[2%] text-primary neon-float neon-pulse opacity-30 dark:opacity-35">
            <ArcReactorIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[28%] left-[3%] text-secondary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-3s" }}>
            <Cpu className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[48%] left-[1.8%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4.5s" }}>
            <ArcReactorIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[68%] left-[3%] text-cyan-400 neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2s" }}>
            <Zap className="h-6 w-6 fill-current drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[86%] left-[2%] text-primary neon-float opacity-30 dark:opacity-35" style={{ animationDelay: "-5s" }}>
            <ArcReactorIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>

          {/* Right Gutter */}
          <div className="absolute top-[10%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1.5s" }}>
            <ArcReactorIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[30%] right-[3%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.5s" }}>
            <Layers className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[50%] right-[1.8%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2.5s" }}>
            <ArcReactorIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[70%] right-[3%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4s" }}>
            <Cpu className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1s" }}>
            <ArcReactorIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          2. 🕷️ SPIDER-MAN THEME PARTICLES (Outer margins)
      ────────────────────────────────────────────────────────────── */}
      {theme === "spiderman" && (
        <>
          {/* Left Gutter */}
          <div className="absolute top-[8%] left-[2%] text-primary neon-float neon-pulse opacity-30 dark:opacity-35">
            <SpiderWebIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[28%] left-[3%] text-secondary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-3s" }}>
            <Compass className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[48%] left-[1.8%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4.5s" }}>
            <SpiderWebIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[68%] left-[3%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2s" }}>
            <SpiderWebIcon className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] left-[2%] text-primary neon-float opacity-30 dark:opacity-35" style={{ animationDelay: "-5s" }}>
            <SpiderWebIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>

          {/* Right Gutter */}
          <div className="absolute top-[10%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1.5s" }}>
            <SpiderWebIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[30%] right-[3%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.5s" }}>
            <SpiderWebIcon className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[50%] right-[1.8%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2.5s" }}>
            <SpiderWebIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[70%] right-[3%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4s" }}>
            <Compass className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1s" }}>
            <SpiderWebIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. 🛠️ BUILDING LAB PARTICLES (Outer margins)
      ────────────────────────────────────────────────────────────── */}
      {theme === "building" && (
        <>
          {/* Left Gutter */}
          <div className="absolute top-[8%] left-[2%] text-primary neon-float neon-pulse opacity-30 dark:opacity-35">
            <Radio className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[28%] left-[3%] text-secondary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-3s" }}>
            <Binary className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[48%] left-[1.8%] text-cyan-400 neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4.5s" }}>
            <ArcReactorIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[68%] left-[3%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2s" }}>
            <Cpu className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] left-[2%] text-secondary neon-float opacity-30 dark:opacity-35" style={{ animationDelay: "-5s" }}>
            <Radio className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>

          {/* Right Gutter */}
          <div className="absolute top-[10%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1.5s" }}>
            <ArcReactorIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[30%] right-[3%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.5s" }}>
            <Activity className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[50%] right-[1.8%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2.5s" }}>
            <Binary className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[70%] right-[3%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4s" }}>
            <Terminal className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] right-[2%] text-cyan-400 neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1s" }}>
            <ArcReactorIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. 💚 HULK THEME PARTICLES (Outer margins)
      ────────────────────────────────────────────────────────────── */}
      {theme === "hulk" && (
        <>
          {/* Left Gutter */}
          <div className="absolute top-[8%] left-[2%] text-primary neon-float neon-pulse opacity-30 dark:opacity-35">
            <GammaIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[28%] left-[3%] text-secondary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-3s" }}>
            <Flame className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[48%] left-[1.8%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4.5s" }}>
            <GammaIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[68%] left-[3%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2s" }}>
            <GammaIcon className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] left-[2%] text-primary neon-float opacity-30 dark:opacity-35" style={{ animationDelay: "-5s" }}>
            <GammaIcon className="h-7 w-7 drop-shadow-[0_0_10px_currentColor]" />
          </div>

          {/* Right Gutter */}
          <div className="absolute top-[10%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1.5s" }}>
            <GammaIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[30%] right-[3%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.5s" }}>
            <Activity className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[50%] right-[1.8%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2.5s" }}>
            <GammaIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[70%] right-[3%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4s" }}>
            <Flame className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1s" }}>
            <GammaIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. 🏹 HAWKEYE THEME PARTICLES (Outer margins)
      ────────────────────────────────────────────────────────────── */}
      {theme === "hawkeye" && (
        <>
          {/* Left Gutter */}
          <div className="absolute top-[8%] left-[2%] text-primary neon-float neon-pulse opacity-30 dark:opacity-35">
            <HawkeyeTargetIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[28%] left-[3%] text-secondary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-3s" }}>
            <Crosshair className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[48%] left-[1.8%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4.5s" }}>
            <HawkeyeTargetIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[68%] left-[3%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2s" }}>
            <Target className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] left-[2%] text-primary neon-float opacity-30 dark:opacity-35" style={{ animationDelay: "-5s" }}>
            <HawkeyeTargetIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>

          {/* Right Gutter */}
          <div className="absolute top-[10%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1.5s" }}>
            <HawkeyeTargetIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[30%] right-[3%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.5s" }}>
            <Target className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[50%] right-[1.8%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2.5s" }}>
            <HawkeyeTargetIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[70%] right-[3%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4s" }}>
            <Crosshair className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1s" }}>
            <HawkeyeTargetIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. 🛡️ CAPTAIN AMERICA THEME PARTICLES (Outer margins)
      ────────────────────────────────────────────────────────────── */}
      {theme === "cap" && (
        <>
          {/* Left Gutter */}
          <div className="absolute top-[8%] left-[2%] text-primary neon-float neon-pulse opacity-30 dark:opacity-35">
            <CapShieldIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[28%] left-[3%] text-secondary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-3s" }}>
            <Star className="h-6 w-6 fill-current drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[48%] left-[1.8%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4.5s" }}>
            <CapShieldIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[68%] left-[3%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2s" }}>
            <ShieldCheck className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] left-[2%] text-primary neon-float opacity-30 dark:opacity-35" style={{ animationDelay: "-5s" }}>
            <CapShieldIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>

          {/* Right Gutter */}
          <div className="absolute top-[10%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1.5s" }}>
            <CapShieldIcon className="h-8 w-8 drop-shadow-[0_0_10px_currentColor]" />
          </div>
          <div className="absolute top-[30%] right-[3%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.5s" }}>
            <Star className="h-6 w-6 fill-current drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[50%] right-[1.8%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2.5s" }}>
            <CapShieldIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[70%] right-[3%] text-secondary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4s" }}>
            <Shield className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1s" }}>
            <CapShieldIcon className="h-7 w-7 drop-shadow-[0_0_8px_currentColor]" />
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. ⚡ THOR THEME PARTICLES (Outer margins)
          Metallic Uru Slate Grey, Storm Steel & Electric Silver Lightning
      ────────────────────────────────────────────────────────────── */}
      {theme === "thor" && (
        <>
          {/* Left Gutter */}
          <div className="absolute top-[8%] left-[2%] text-slate-400 dark:text-slate-300 neon-float neon-pulse opacity-30 dark:opacity-35">
            <MjolnirIcon className="h-8 w-8 drop-shadow-[0_0_10px_#94A3B8]" />
          </div>
          <div className="absolute top-[28%] left-[3%] text-secondary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-3s" }}>
            <Zap className="h-7 w-7 fill-current drop-shadow-[0_0_8px_currentColor] lightning-flicker" />
          </div>
          <div className="absolute top-[48%] left-[1.8%] text-slate-400 dark:text-slate-200 neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4.5s" }}>
            <MjolnirIcon className="h-7 w-7 drop-shadow-[0_0_8px_#CBD5E1]" />
          </div>
          <div className="absolute top-[68%] left-[3%] text-secondary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2s" }}>
            <Sparkles className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[88%] left-[2%] text-slate-400 dark:text-slate-300 neon-float opacity-30 dark:opacity-35" style={{ animationDelay: "-5s" }}>
            <MjolnirIcon className="h-7 w-7 drop-shadow-[0_0_10px_#94A3B8]" />
          </div>
          <div className="absolute top-[94%] left-[1.5%] text-slate-400/70 neon-float-slow opacity-20 dark:opacity-25" style={{ animationDelay: "-2.5s" }}>
            <span className="font-mono text-[9px] tracking-widest text-slate-400 dark:text-slate-300 font-bold">{"[ URU // MJÖLNIR ]"}</span>
          </div>

          {/* Right Gutter */}
          <div className="absolute top-[10%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1.5s" }}>
            <Zap className="h-8 w-8 fill-current drop-shadow-[0_0_10px_currentColor] lightning-flicker" />
          </div>
          <div className="absolute top-[30%] right-[3%] text-slate-400 dark:text-slate-300 neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.5s" }}>
            <MjolnirIcon className="h-7 w-7 drop-shadow-[0_0_8px_#94A3B8]" />
          </div>
          <div className="absolute top-[50%] right-[1.8%] text-secondary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2.5s" }}>
            <Zap className="h-7 w-7 fill-current drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[70%] right-[3%] text-slate-400 dark:text-slate-200 neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4s" }}>
            <MjolnirIcon className="h-7 w-7 drop-shadow-[0_0_8px_#CBD5E1]" />
          </div>
          <div className="absolute top-[88%] right-[2%] text-secondary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1s" }}>
            <Sparkles className="h-6 w-6 drop-shadow-[0_0_8px_currentColor]" />
          </div>
          <div className="absolute top-[95%] right-[1.5%] text-slate-400/70 neon-float opacity-20 dark:opacity-25" style={{ animationDelay: "-4s" }}>
            <span className="font-mono text-[9px] tracking-widest text-slate-400 dark:text-slate-300 font-bold">{"[ ASGARD // THUNDER ]"}</span>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────
          8. ⧗ BLACK WIDOW THEME PARTICLES (Outer margins)
      ────────────────────────────────────────────────────────────── */}
      {theme === "widow" && (
        <>
          {/* Left Gutter */}
          <div className="absolute top-[8%] left-[2%] text-primary neon-float neon-pulse opacity-30 dark:opacity-35">
            <BlackWidowIcon className="h-8 w-8 drop-shadow-[0_0_10px_#DC2626]" />
          </div>
          <div className="absolute top-[28%] left-[3%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-3s" }}>
            <Crosshair className="h-6 w-6 drop-shadow-[0_0_8px_#DC2626]" />
          </div>
          <div className="absolute top-[48%] left-[1.8%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4.5s" }}>
            <BlackWidowIcon className="h-7 w-7 drop-shadow-[0_0_8px_#DC2626]" />
          </div>
          <div className="absolute top-[68%] left-[3%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2s" }}>
            <BlackWidowIcon className="h-6 w-6 drop-shadow-[0_0_8px_#DC2626]" />
          </div>
          <div className="absolute top-[88%] left-[2%] text-primary neon-float opacity-30 dark:opacity-35" style={{ animationDelay: "-5s" }}>
            <BlackWidowIcon className="h-7 w-7 drop-shadow-[0_0_10px_#DC2626]" />
          </div>

          {/* Right Gutter */}
          <div className="absolute top-[10%] right-[2%] text-primary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1.5s" }}>
            <BlackWidowIcon className="h-8 w-8 drop-shadow-[0_0_10px_#DC2626]" />
          </div>
          <div className="absolute top-[30%] right-[3%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-3.5s" }}>
            <Target className="h-6 w-6 drop-shadow-[0_0_8px_#DC2626]" />
          </div>
          <div className="absolute top-[50%] right-[1.8%] text-primary neon-float-slow opacity-25 dark:opacity-30" style={{ animationDelay: "-2.5s" }}>
            <BlackWidowIcon className="h-7 w-7 drop-shadow-[0_0_8px_#DC2626]" />
          </div>
          <div className="absolute top-[70%] right-[3%] text-primary neon-float opacity-25 dark:opacity-30" style={{ animationDelay: "-4s" }}>
            <Crosshair className="h-6 w-6 drop-shadow-[0_0_8px_#DC2626]" />
          </div>
          <div className="absolute top-[88%] right-[2%] text-primary neon-float-slow opacity-30 dark:opacity-35" style={{ animationDelay: "-1s" }}>
            <BlackWidowIcon className="h-7 w-7 drop-shadow-[0_0_8px_#DC2626]" />
          </div>
        </>
      )}
    </div>
  );
}
