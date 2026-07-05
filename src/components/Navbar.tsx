import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-widest">
          <span className="inline-block h-3 w-3 rounded-full bg-primary arc-pulse" />
          <span className="text-hero">S.MOHAPATRA</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition hover:text-hero hover:bg-muted"
              activeProps={{ className: "text-hero bg-muted" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="rounded-full border border-border p-2 text-foreground transition hover:border-hero hover:text-hero"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
      <div className="md:hidden flex overflow-x-auto gap-1 px-4 pb-2 border-t border-border/40">
        {links.map(l => (
          <Link key={l.to} to={l.to} className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            activeProps={{ className: "text-hero bg-muted" }} activeOptions={{ exact: l.to === "/" }}>
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
