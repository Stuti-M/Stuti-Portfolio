import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState?.location?.pathname || "/";

  // Determine character mode based on current route
  let heroType: "shield" | "ironman" | "spiderman" | "hulk" | "hawkeye" | "cap" | "thor" | "widow" = "shield";
  if (currentPath === "/projects") heroType = "ironman";
  else if (currentPath === "/building") heroType = "spiderman";
  else if (currentPath === "/experience") heroType = "hulk";
  else if (currentPath === "/skills") heroType = "hawkeye";
  else if (currentPath === "/achievements") heroType = "cap";
  else if (currentPath === "/about") heroType = "thor";
  else if (currentPath === "/contact") heroType = "widow";

  useEffect(() => {
    // Check if device is touch or fine pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let trailId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPos(newPos);
      if (!isVisible) setIsVisible(true);

      // Add lightweight trail points only for spider-man
      if (heroType === "spiderman") {
        setTrail((prev) => [
          { ...newPos, id: trailId++ },
          ...prev.slice(0, 4),
        ]);
      }

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
  }, [isVisible, heroType]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="custom-cursor-container pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none transition-opacity duration-150"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* 🕷️ SPIDER-MAN: Subtle Kinetic Web-Strands Trail */}
      {heroType === "spiderman" && trail.length > 1 && (
        <svg className="absolute inset-0 h-full w-full pointer-events-none">
          {trail.map((p, i) => {
            if (i === 0) return null;
            const prev = trail[i - 1];
            const opacity = (1 - i / trail.length) * 0.45;
            return (
              <line
                key={p.id}
                x1={prev.x}
                y1={prev.y}
                x2={p.x}
                y2={p.y}
                stroke="#38bdf8"
                strokeWidth={1.5 - i * 0.25}
                strokeDasharray={i % 2 === 0 ? "2 2" : "none"}
                style={{ opacity }}
              />
            );
          })}
        </svg>
      )}

      {/* 🦾 IRON MAN: Targeting Reticle with Concentric Lock & Scan Coordinates */}
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
            {/* Concentric rotating Stark HUD circles */}
            <div className="h-7 w-7 rounded-full border border-red-500/70 shadow-[0_0_10px_rgba(239,68,68,0.5)] flex items-center justify-center animate-spin [animation-duration:8s]">
              <div className="absolute top-0 w-1 h-1 bg-amber-400 rounded-full" />
              <div className="absolute bottom-0 w-1 h-1 bg-amber-400 rounded-full" />
            </div>
            <div className="absolute h-10 w-10 rounded-full border border-dashed border-amber-400/40 animate-spin [animation-duration:14s] [animation-direction:reverse]" />
            <div className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
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
            <div className="h-6 w-6 rounded-full border border-dashed border-sky-400/80 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
            <div className="absolute h-2 w-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.9)]" />
            <div className="absolute h-8 w-[1px] bg-sky-400/30" />
            <div className="absolute w-8 h-[1px] bg-sky-400/30" />
          </div>
        </div>
      )}

      {/* 💚 HULK: Gamma Kinetic Shock Dot */}
      {heroType === "hulk" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-140" : "scale-100"
            }`}
          >
            <div className="h-6 w-6 rounded-full border border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
            <div className="absolute h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,1)]" />
          </div>
        </div>
      )}

      {/* 🏹 HAWKEYE: Precision Crosshair with Lock Brackets */}
      {heroType === "hawkeye" && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              isPointer ? "scale-130" : "scale-100"
            }`}
          >
            <div className="h-7 w-7 rounded-full border border-purple-500/80 shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
            <div className="absolute h-10 w-[1px] bg-purple-400/80" />
            <div className="absolute w-10 h-[1px] bg-purple-400/80" />
            <div className="absolute h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
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
            <div className="h-6 w-6 rounded-full border-2 border-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <div className="absolute h-4 w-4 rounded-full border border-red-500/80" />
            <div className="absolute h-1.5 w-1.5 rounded-full bg-blue-300" />
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
            <div className="h-6 w-6 rounded-full border border-blue-400/60 shadow-[0_0_14px_rgba(96,165,250,0.6)] animate-pulse" />
            <div className="absolute h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,1)]" />
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
            <div className="h-5 w-5 rounded-full border border-red-600/70 shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
            <div className="absolute h-2 w-2 rounded-full bg-red-600 shadow-[0_0_10px_#dc2626]" />
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

