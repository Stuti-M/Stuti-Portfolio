import { useTheme, MARVEL_HEROES, type MarvelHero } from "./ThemeProvider";
import { Sparkles, Shield, Zap } from "lucide-react";

export function MarvelThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { hero, setHero, currentHeroConfig } = useTheme();

  if (compact) {
    return (
      <div className="flex items-center gap-1 rounded-full border border-border/80 bg-card/80 p-1 shadow-xs backdrop-blur-md">
        {MARVEL_HEROES.map((h) => {
          const isActive = hero === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setHero(h.id)}
              title={`${h.name} (${h.colorName})`}
              aria-label={`Switch theme to ${h.name}`}
              className={`relative flex h-7 w-7 items-center justify-center rounded-full text-xs transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-xs scale-110 font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              <span>{h.emoji}</span>
              {isActive && (
                <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-secondary arc-pulse" />
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border/80 bg-card/80 p-4 shadow-sm backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            MARVEL PROTOCOL SELECTOR
          </span>
        </div>
        <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
          {currentHeroConfig.protocolBadge}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {MARVEL_HEROES.map((h) => {
          const isActive = hero === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setHero(h.id)}
              className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                isActive
                  ? "border-primary bg-primary/10 shadow-xs ring-2 ring-primary/20 scale-[1.02]"
                  : "border-border/70 bg-card hover:border-primary/50 hover:bg-muted/50"
              }`}
            >
              <span className="text-xl shrink-0">{h.emoji}</span>
              <div className="min-w-0">
                <p className={`text-xs font-bold truncate ${isActive ? "text-primary" : "text-foreground"}`}>
                  {h.name}
                </p>
                <p className="text-[10px] text-muted-foreground truncate font-mono">
                  {h.codename}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
