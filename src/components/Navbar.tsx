import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, Sun, Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { BlackWidowIcon, ShieldLogoIcon } from "./MarvelIcons";

interface NavItem {
  to: string;
  label: string;
  emoji?: string;
  hero: string;
  isWidowIcon?: boolean;
  isShieldIcon?: boolean;
}

const navLinks: NavItem[] = [
  { to: "/", label: "Home", isShieldIcon: true, hero: "S.H.I.E.L.D." },
  { to: "/projects", label: "Work", emoji: "🕷️", hero: "Spider-Man" },
  { to: "/building", label: "Building", emoji: "🛠️", hero: "Iron Man Lab" },
  { to: "/experience", label: "Experience", emoji: "💚", hero: "Hulk" },
  { to: "/skills", label: "Skills", emoji: "🏹", hero: "Hawkeye" },
  { to: "/achievements", label: "Achievements", emoji: "🛡️", hero: "Cap" },
  { to: "/about", label: "About", emoji: "⚡", hero: "Thor" },
  { to: "/contact", label: "Contact", hero: "Black Widow", isWidowIcon: true },
];

export function Navbar() {
  const { mode, toggleMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentNav = navLinks.find((l) => l.to === currentPath) || navLinks[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/80 shadow-xs"
          : "bg-background/40 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo & Active Page Hero Protocol */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground transition"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/20 transition group-hover:scale-125" />
            <span>STUTI<span className="text-primary">.</span></span>
          </Link>

          <div className="hidden xl:flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground bg-card/60 border border-border/60 rounded-full px-2.5 py-0.5">
            {currentNav.isWidowIcon ? (
              <BlackWidowIcon className="h-3.5 w-3.5 text-red-500" />
            ) : currentNav.isShieldIcon ? (
              <ShieldLogoIcon className="h-3.5 w-3.5 text-primary" />
            ) : (
              <span>{currentNav.emoji}</span>
            )}
            <span className="font-semibold text-primary">{currentNav.hero}</span>
          </div>
        </div>

        {/* Desktop Multi-Page Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 shadow-xs backdrop-blur-sm">
          {navLinks.map((item) => {
            const isActive = currentPath === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs font-semibold scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                }`}
              >
                {item.isWidowIcon ? (
                  <BlackWidowIcon className="h-3.5 w-3.5" />
                ) : item.isShieldIcon ? (
                  <ShieldLogoIcon className="h-3.5 w-3.5" />
                ) : (
                  <span className="text-[11px]">{item.emoji}</span>
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Resume + Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="mailto:mstuti.official@gmail.com?subject=Resume%20Request%20-%20Stuti%20Mohapatra"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={toggleMode}
            aria-label="Toggle dark and light theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground transition hover:border-primary hover:text-primary"
          >
            {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-card/80 text-foreground md:hidden transition hover:border-primary hover:text-primary"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 py-5 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-primary/15 text-primary font-bold border border-primary/30"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.isWidowIcon ? (
                      <BlackWidowIcon className="h-4 w-4 text-red-500" />
                    ) : item.isShieldIcon ? (
                      <ShieldLogoIcon className="h-4 w-4 text-primary" />
                    ) : (
                      <span>{item.emoji}</span>
                    )}
                    <span>{item.label}</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.hero} →
                  </span>
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border/60 mt-2">
              <a
                href="mailto:mstuti.official@gmail.com?subject=Resume%20Request%20-%20Stuti%20Mohapatra"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <FileText className="h-4 w-4" />
                <span>Request Resume ↗</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
