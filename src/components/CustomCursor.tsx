import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState?.location?.pathname || "/";

  // Determine character mode based on current route
  let heroType: "shield" | "ironman" | "spiderman" | "hulk" | "hawkeye" | "cap" | "thor" | "widow" = "shield";
  if (currentPath === "/projects") heroType = "spiderman";
  else if (currentPath === "/building") heroType = "ironman";
  else if (currentPath === "/experience") heroType = "hulk";
  else if (currentPath === "/skills") heroType = "hawkeye";
  else if (currentPath === "/achievements") heroType = "cap";
  else if (currentPath === "/about") heroType = "thor";
  else if (currentPath === "/contact") heroType = "widow";

  useEffect(() => {
    // Check if device is touch or fine pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest("a, button, [role='button'], input, select, textarea, .cursor-pointer") !== null;
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="custom-cursor-container pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none transition-opacity duration-150"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* 🦾 IRON MAN: Targeting Reticle with Concentric Lock */}
      {heroType === "ironman" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-125" : "scale-100"
            }`}
          >
            <div className="h-7 w-7 rounded-full border border-red-500/70 shadow-[0_0_10px_rgba(239,68,68,0.5)] flex items-center justify-center animate-spin [animation-duration:8s]">
              <div className="absolute top-0 w-1 h-1 bg-amber-400 rounded-full" />
              <div className="absolute bottom-0 w-1 h-1 bg-amber-400 rounded-full" />
            </div>
            <div className="absolute h-1.5 w-1.5 rounded-full bg-red-500" />
            <div className="absolute -top-3 font-mono text-[8px] tracking-tighter text-amber-400/80 uppercase">
              HUD
            </div>
          </div>
        </div>
      )}

      {/* 🕷️ SPIDER-MAN: Web Node Connection Point */}
      {heroType === "spiderman" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-130" : "scale-100"
            }`}
          >
            <div className="h-6 w-6 rounded-full border border-dashed border-sky-400/70 shadow-[0_0_8px_rgba(14,165,233,0.4)]" />
            <div className="absolute h-2 w-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
            <div className="absolute h-8 w-[1px] bg-sky-400/20" />
            <div className="absolute w-8 h-[1px] bg-sky-400/20" />
          </div>
        </div>
      )}

      {/* 💚 HULK: Gamma Kinetic Dot */}
      {heroType === "hulk" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-135" : "scale-100"
            }`}
          >
            <div className="h-6 w-6 rounded-full border border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.4)]" />
            <div className="absolute h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          </div>
        </div>
      )}

      {/* 🏹 HAWKEYE: Precision Crosshair */}
      {heroType === "hawkeye" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-125" : "scale-100"
            }`}
          >
            <div className="h-7 w-7 rounded-full border border-purple-500/80 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            <div className="absolute h-9 w-[1px] bg-purple-400/70" />
            <div className="absolute w-9 h-[1px] bg-purple-400/70" />
            <div className="absolute h-1 w-1 rounded-full bg-red-500" />
          </div>
        </div>
      )}

      {/* 🛡️ CAPTAIN AMERICA: Tactical Shield Disc */}
      {heroType === "cap" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-125" : "scale-100"
            }`}
          >
            <div className="h-6 w-6 rounded-full border-2 border-blue-500/70 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
            <div className="absolute h-3.5 w-3.5 rounded-full border border-red-500/70" />
            <div className="absolute h-1.5 w-1.5 rounded-full bg-blue-400" />
          </div>
        </div>
      )}

      {/* ⚡ THOR: Electric Spark Dot */}
      {heroType === "thor" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-130" : "scale-100"
            }`}
          >
            <div className="h-6 w-6 rounded-full border border-blue-400/40 shadow-[0_0_12px_rgba(96,165,250,0.5)]" />
            <div className="absolute h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,1)]" />
            <div className="absolute -bottom-3 font-mono text-[7px] text-blue-300/80">⚡</div>
          </div>
        </div>
      )}

      {/* 🕷️ BLACK WIDOW: Tactical Red Laser Dot */}
      {heroType === "widow" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-130" : "scale-100"
            }`}
          >
            <div className="h-5 w-5 rounded-full border border-red-600/60 shadow-[0_0_10px_rgba(220,38,38,0.7)]" />
            <div className="absolute h-2 w-2 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626]" />
          </div>
        </div>
      )}

      {/* 🛡️ S.H.I.E.L.D. Helicarrier Tactical Reticle */}
      {heroType === "shield" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-120" : "scale-100"
            }`}
          >
            <div className="h-6 w-6 border border-primary/60 shadow-[0_0_8px_rgba(14,165,233,0.4)]" />
            <div className="absolute h-1.5 w-1.5 bg-primary" />
          </div>
        </div>
      )}
    </div>
  );
}
