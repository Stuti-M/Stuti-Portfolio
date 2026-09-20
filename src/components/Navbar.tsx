import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, Sun, Menu, X, ArrowUpRight, BookOpen, Terminal, Bot, Sparkles, Command, Briefcase, FileText } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { BlackWidowIcon, ShieldLogoIcon, MjolnirIcon } from "./MarvelIcons";
import { EngineeringLogModal } from "./EngineeringLog";
import { useStutiAI } from "./StutiAIContext";
import { useCommandPalette } from "./CommandPaletteContext";

interface NavItem {
  number: string;
  to: string;
  label: string;
  hero: string;
  cue: string;
  isWidowIcon?: boolean;
  isShieldIcon?: boolean;
  isMjolnirIcon?: boolean;
}

const navItems: NavItem[] = [
  { number: "01", to: "/", label: "HOME", hero: "S.H.I.E.L.D. HQ", cue: "Strategic Defense", isShieldIcon: true },
  { number: "02", to: "/building", label: "BUILD", hero: "Spider-Man", cue: "Kinetic Network" },
  { number: "03", to: "/projects", label: "WORK", hero: "Iron Man", cue: "Stark HUD / Systems" },
  { number: "04", to: "/experience", label: "EXPERIENCE", hero: "Hulk", cue: "Gamma Impact" },
  { number: "05", to: "/skills", label: "SKILLS", hero: "Hawkeye", cue: "Precision Targeting" },
  { number: "06", to: "/achievements", label: "ACHIEVEMENTS", hero: "Captain America", cue: "Shield Podiums" },
  { number: "07", to: "/about", label: "ABOUT", hero: "Thor", cue: "Asgardian Chronicle", isMjolnirIcon: true },
  { number: "08", to: "/contact", label: "CONTACT", hero: "Black Widow", cue: "Tactical Red Room", isWidowIcon: true },
];

export function Navbar() {
  const { mode, toggleMode } = useTheme();
  const { openAI } = useStutiAI();
  const { openCommandPalette, openRecruiterMode } = useCommandPalette();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState?.location?.pathname || "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeNav = navItems.find((l) => l.to === currentPath) || navItems[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/80 shadow-xs"
            : "bg-background/40 backdrop-blur-xs border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6">
          {/* Brand: STUTI // SYSTEM with Active Character Protocol */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-tight text-foreground transition"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary ring-4 ring-primary/20 transition group-hover:scale-125" />
              <span className="text-foreground">STUTI</span>
              <span className="text-primary font-mono">//</span>
              <span className="text-muted-foreground font-semibold tracking-wider">SYSTEM</span>
            </Link>

            {/* Active Character & Hover Cue Indicator */}
            <div className="hidden xl:flex items-center gap-2 font-mono text-[10px] text-muted-foreground bg-card/80 border border-border/70 rounded-full px-3 py-1 shadow-2xs">
              <span className="text-primary font-bold">
                {hoveredItem ? hoveredItem.number : activeNav.number}
              </span>
              <span>//</span>
              <span className="font-semibold text-foreground">
                {hoveredItem ? hoveredItem.hero : activeNav.hero}
              </span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-primary/90">
                {hoveredItem ? hoveredItem.cue : activeNav.cue}
              </span>
            </div>
          </div>

          {/* Desktop Navigation: 01 HOME .. 08 CONTACT */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/80 bg-card/70 px-2.5 py-1 shadow-2xs backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-mono transition-all duration-150 ${
                    isActive
                      ? "bg-primary text-primary-foreground font-bold shadow-xs scale-102"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  <span className={`text-[10px] opacity-70 ${isActive ? "text-primary-foreground" : "text-primary"}`}>
                    {item.number}
                  </span>
                  <span className="font-semibold tracking-tight">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Command Palette + Recruiter Mode + STUTI AI + Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={openCommandPalette}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-2 sm:px-2.5 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary transition shadow-2xs cursor-pointer group"
              title="Open Command Palette (Ctrl+K / Cmd+K)"
            >
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span className="hidden xl:inline text-[11px]">COMMAND</span>
              <kbd className="hidden sm:inline-flex items-center text-[9px] px-1 py-0.2 rounded bg-muted border border-border text-muted-foreground font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Recruiter Mode Button */}
            <button
              onClick={openRecruiterMode}
              className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2 sm:px-2.5 py-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition shadow-2xs cursor-pointer"
              title="Open Recruiter Fast Scan View"
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">RECRUITER</span>
              <span>→</span>
            </button>

            {/* STUTI AI Trigger Button */}
            <button
              onClick={() => openAI()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/50 bg-primary/10 px-2.5 sm:px-3 py-1.5 text-xs font-mono font-bold text-primary transition hover:bg-primary hover:text-primary-foreground hover:scale-102 shadow-2xs cursor-pointer group"
              title="Open STUTI AI Portfolio Intelligence"
            >
              <Bot className="h-3.5 w-3.5 group-hover:animate-bounce" />
              <span className="hidden md:inline">STUTI AI</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleMode}
              aria-label="Toggle dark and light theme"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground transition hover:border-primary hover:text-primary cursor-pointer"
            >
              {mode === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground lg:hidden transition hover:border-primary hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-border bg-background/98 backdrop-blur-xl px-4 py-4 shadow-lg animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1.5">
              {/* Mobile Quick Triggers */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCommandPalette();
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-mono font-bold bg-muted/60 text-foreground border border-border"
                >
                  <Terminal className="h-3.5 w-3.5 text-primary" />
                  <span>COMMANDS (⌘K)</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openRecruiterMode();
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                >
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>RECRUITER MODE →</span>
                </button>
              </div>

              {/* STUTI AI Mobile Quick Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAI();
                }}
                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-mono bg-primary/15 text-primary font-bold border border-primary/40 mb-1"
              >
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  <span>STUTI AI // ASK MY PORTFOLIO</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                  ● ONLINE
                </span>
              </button>

              {navItems.map((item) => {
                const isActive = currentPath === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2 text-sm font-mono transition ${
                      isActive
                        ? "bg-primary/15 text-primary font-bold border border-primary/40"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-primary font-bold">{item.number}</span>
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.hero}</span>
                  </Link>
                );
              })}

              <div className="mt-3 pt-3 border-t border-border/70 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsLogOpen(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-primary/40 bg-primary/10 text-primary font-mono text-xs font-bold"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>BUILD LOGS</span>
                </button>
                <a
                  href="mailto:mstuti.official@gmail.com?subject=Resume%20Request%20-%20Stuti%20Mohapatra"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-border bg-card text-foreground font-mono text-xs font-bold"
                >
                  <span>RESUME</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Engineering Log Modal */}
      <EngineeringLogModal isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} />
    </>
  );
}
