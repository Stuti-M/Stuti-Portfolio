import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type MarvelHero = "ironman" | "spiderman" | "thor" | "cap" | "hulk" | "hawkeye";
export type ThemeMode = "light" | "dark";

export interface MarvelHeroConfig {
  id: MarvelHero;
  name: string;
  codename: string;
  emoji: string;
  colorName: string;
  primaryColor: string;
  accentColor: string;
  tagline: string;
  protocolBadge: string;
}

export const MARVEL_HEROES: MarvelHeroConfig[] = [
  {
    id: "ironman",
    name: "Iron Man",
    codename: "Tony Stark",
    emoji: "🦾",
    colorName: "Hot-Rod Red & Gold",
    primaryColor: "#E11D48",
    accentColor: "#F59E0B",
    tagline: "Stark Industries // Arc Reactor Online",
    protocolBadge: "STARK PROTOCOL // MARK LXXXV",
  },
  {
    id: "spiderman",
    name: "Spider-Man",
    codename: "Peter Parker",
    emoji: "🕷️",
    colorName: "Web Crimson & Electric Blue",
    primaryColor: "#EF4444",
    accentColor: "#0EA5E9",
    tagline: "Friendly Neighborhood // Web-Sense Active",
    protocolBadge: "PARKER PROTOCOL // SENSE ONLINE",
  },
  {
    id: "thor",
    name: "Thor",
    codename: "God of Thunder",
    emoji: "⚡",
    colorName: "Asgardian Blue & Lightning Gold",
    primaryColor: "#2563EB",
    accentColor: "#EAB308",
    tagline: "Asgardian Power // Mjölnir Ready",
    protocolBadge: "ASGARDIAN PROTOCOL // MJÖLNIR",
  },
  {
    id: "cap",
    name: "Captain America",
    codename: "Steve Rogers",
    emoji: "🛡️",
    colorName: "Vibranium Navy & Shield Red",
    primaryColor: "#1D4ED8",
    accentColor: "#DC2626",
    tagline: "Strategic Homeland // Vibranium Defense",
    protocolBadge: "AVENGER 01 // SHIELD DEPLOYED",
  },
  {
    id: "hulk",
    name: "Hulk",
    codename: "Bruce Banner",
    emoji: "💚",
    colorName: "Gamma Emerald & Radioactive Purple",
    primaryColor: "#16A34A",
    accentColor: "#9333EA",
    tagline: "Gamma Core // Maximum Smashing Power",
    protocolBadge: "GAMMA PROTOCOL // LABS ACTIVE",
  },
  {
    id: "hawkeye",
    name: "Hawkeye",
    codename: "Clint Barton",
    emoji: "🏹",
    colorName: "Ronin Purple & Precision Crimson",
    primaryColor: "#7C3AED",
    accentColor: "#E11D48",
    tagline: "Ronin Protocol // Never Misses",
    protocolBadge: "RONIN PROTOCOL // TARGET LOCKED",
  },
];

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  hero: MarvelHero;
  setHero: (hero: MarvelHero) => void;
  currentHeroConfig: MarvelHeroConfig;
}

const ThemeCtx = createContext<ThemeContextType>({
  mode: "dark",
  toggleMode: () => {},
  hero: "ironman",
  setHero: () => {},
  currentHeroConfig: MARVEL_HEROES[0],
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [hero, setHeroState] = useState<MarvelHero>("ironman");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedMode = localStorage.getItem("theme-mode") as ThemeMode | null;
    const storedHero = localStorage.getItem("marvel-hero") as MarvelHero | null;

    if (storedMode) setMode(storedMode);
    if (storedHero && MARVEL_HEROES.some((h) => h.id === storedHero)) {
      setHeroState(storedHero);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    root.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme-mode", mode);

    MARVEL_HEROES.forEach((h) => root.classList.remove(`theme-${h.id}`));
    root.classList.add(`theme-${hero}`);
    root.setAttribute("data-hero", hero);
    localStorage.setItem("marvel-hero", hero);
  }, [mode, hero]);

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setHero = (newHero: MarvelHero) => {
    setHeroState(newHero);
  };

  const currentHeroConfig =
    MARVEL_HEROES.find((h) => h.id === hero) || MARVEL_HEROES[0];

  return (
    <ThemeCtx.Provider
      value={{
        mode,
        toggleMode,
        hero,
        setHero,
        currentHeroConfig,
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
