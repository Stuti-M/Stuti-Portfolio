import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "@tanstack/react-router";
import {
  Search,
  Terminal,
  FolderGit2,
  Workflow,
  Sparkles,
  Award,
  Layers,
  User,
  Mail,
  FileText,
  Github,
  Bot,
  Briefcase,
  ArrowRight,
  CornerDownLeft,
  X,
  Cpu,
} from "lucide-react";
import { useStutiAI } from "./StutiAIContext";

export interface CommandItem {
  id: string;
  command: string;
  title: string;
  description: string;
  category: "NAVIGATION" | "ACTIONS" | "EXTERNAL";
  icon: any;
  action: () => void;
  keywords?: string[];
  shortcutNumber?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiterMode?: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenRecruiterMode }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { openAI } = useStutiAI();

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: "nav-work",
        shortcutNumber: "01",
        command: "/work",
        title: "WORK & ENGINEERING SYSTEMS",
        description: "Stark HUD: Smart Safety Watch, Sentinel-X, Prabandh-Drishti",
        category: "NAVIGATION",
        icon: FolderGit2,
        action: () => {
          router.navigate({ to: "/projects" });
          onClose();
        },
        keywords: ["projects", "builds", "iron man", "hardware", "tinyml", "stark"],
      },
      {
        id: "nav-building",
        shortcutNumber: "02",
        command: "/building",
        title: "CURRENTLY BUILDING",
        description: "Spider-Man kinetic network of active prototypes and edge nodes",
        category: "NAVIGATION",
        icon: Workflow,
        action: () => {
          router.navigate({ to: "/building" });
          onClose();
        },
        keywords: ["lab", "spider-man", "mesh", "lora", "prototypes", "nodes"],
      },
      {
        id: "nav-experience",
        shortcutNumber: "03",
        command: "/experience",
        title: "INDUSTRY EXPERIENCE",
        description: "Hulk Protocol: Software Developer Intern at Paradip Port Authority",
        category: "NAVIGATION",
        icon: Briefcase,
        action: () => {
          router.navigate({ to: "/experience" });
          onClose();
        },
        keywords: ["internship", "paradip port", "govt of india", "hulk", "work"],
      },
      {
        id: "nav-skills",
        shortcutNumber: "04",
        command: "/skills",
        title: "SKILLS & TARGET RETICLE",
        description: "Hawkeye Ronin: AI/ML, Embedded C++, Spring Boot, DSA",
        category: "NAVIGATION",
        icon: Layers,
        action: () => {
          router.navigate({ to: "/skills" });
          onClose();
        },
        keywords: ["tech stack", "languages", "python", "java", "hawkeye", "tools"],
      },
      {
        id: "nav-achievements",
        shortcutNumber: "05",
        command: "/achievements",
        title: "ACHIEVEMENTS & PODIUMS",
        description: "Captain America: 2nd Place Agentic AI Hackathon, 2nd Place SheCodex",
        category: "NAVIGATION",
        icon: Award,
        action: () => {
          router.navigate({ to: "/achievements" });
          onClose();
        },
        keywords: ["hackathon", "awards", "podium", "captain america", "shecodex", "anant chakra"],
      },
      {
        id: "nav-about",
        shortcutNumber: "06",
        command: "/about",
        title: "ABOUT & JOURNEY",
        description: "Thor Asgardian Chronicle: Builder background & methodology",
        category: "NAVIGATION",
        icon: User,
        action: () => {
          router.navigate({ to: "/about" });
          onClose();
        },
        keywords: ["bio", "story", "education", "soa university", "thor"],
      },
      {
        id: "nav-contact",
        shortcutNumber: "07",
        command: "/contact",
        title: "CONTACT & COMMS",
        description: "Black Widow Tactical: Direct email, LinkedIn, LeetCode",
        category: "NAVIGATION",
        icon: Mail,
        action: () => {
          router.navigate({ to: "/contact" });
          onClose();
        },
        keywords: ["email", "message", "hire", "collaborate", "widow"],
      },
      {
        id: "act-recruiter",
        command: "/recruiter",
        title: "RECRUITER MODE",
        description: "Streamlined executive summary for fast technical review",
        category: "ACTIONS",
        icon: FileText,
        action: () => {
          onClose();
          if (onOpenRecruiterMode) onOpenRecruiterMode();
        },
        keywords: ["recruiter", "fast", "summary", "overview", "resume", "hiring"],
      },
      {
        id: "act-ai",
        command: "/ai",
        title: "STUTI AI INTELLIGENCE",
        description: "Ask questions directly to the portfolio AI engine",
        category: "ACTIONS",
        icon: Bot,
        action: () => {
          onClose();
          openAI();
        },
        keywords: ["ai", "assistant", "ask", "chat", "stuti ai", "intelligence"],
      },
      {
        id: "ext-resume",
        command: "/resume",
        title: "REQUEST RESUME",
        description: "Direct dispatch to Stuti's inbox for PDF resume",
        category: "EXTERNAL",
        icon: FileText,
        action: () => {
          window.open("mailto:mstuti.official@gmail.com?subject=Resume%20Request%20-%20Stuti%20Mohapatra", "_blank");
          onClose();
        },
        keywords: ["cv", "resume", "pdf", "download"],
      },
      {
        id: "ext-github",
        command: "/github",
        title: "GITHUB REPOSITORY",
        description: "Explore open-source repositories and hardware code (github.com/Stuti-M)",
        category: "EXTERNAL",
        icon: Github,
        action: () => {
          window.open("https://github.com/Stuti-M", "_blank");
          onClose();
        },
        keywords: ["github", "git", "source code", "repos"],
      },
    ],
    [router, onClose, onOpenRecruiterMode, openAI]
  );

  // Filter items based on query
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase().trim();
    return commands.filter((cmd) => {
      const matchCommand = cmd.command.toLowerCase().includes(q);
      const matchTitle = cmd.title.toLowerCase().includes(q);
      const matchDesc = cmd.description.toLowerCase().includes(q);
      const matchKeywords = cmd.keywords?.some((k) => k.toLowerCase().includes(q));
      return matchCommand || matchTitle || matchDesc || matchKeywords;
    });
  }, [commands, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Keyboard navigation within the modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[150] flex items-start justify-center p-3 sm:p-6 pt-[10vh] sm:pt-[14vh] bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-primary/40 bg-card/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-border/80 bg-muted/30 gap-3">
          <Terminal className="h-4 w-4 text-primary shrink-0 animate-pulse" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search portfolio or type a command (/work, /skills, /recruiter)..."
            className="w-full bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none"
            autoComplete="off"
            spellCheck="false"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <span className="hidden sm:inline-flex items-center font-mono text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded bg-muted/60">
            ESC to close
          </span>
        </div>

        {/* Command List Body */}
        <div ref={listRef} className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground font-mono text-xs">
              <p>No matching commands or routes found for "{query}".</p>
              <p className="mt-1 text-[11px] text-primary">Try searching "projects", "skills", "experience", or "recruiter".</p>
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = cmd.icon;
              return (
                <div
                  key={cmd.id}
                  data-index={idx}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${
                    isSelected
                      ? "bg-primary/15 border border-primary/50 text-foreground shadow-xs"
                      : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors shrink-0 ${
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted/60 text-muted-foreground border-border"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {cmd.shortcutNumber && (
                          <span className="font-mono text-[10px] text-primary/70 font-bold">
                            {cmd.shortcutNumber}
                          </span>
                        )}
                        <span className="font-display font-bold text-xs sm:text-sm text-foreground truncate">
                          {cmd.title}
                        </span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                          {cmd.command}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground font-body truncate mt-0.5">
                        {cmd.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 pl-2">
                    {isSelected && (
                      <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-primary font-semibold">
                        <span>SELECT</span>
                        <CornerDownLeft className="h-3 w-3" />
                      </span>
                    )}
                    <ArrowRight className={`h-3.5 w-3.5 ${isSelected ? "text-primary" : "opacity-0"}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-border/80 bg-muted/40 font-mono text-[11px] text-muted-foreground select-none">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-border text-[9px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-border text-[9px]">↓</kbd>
              <span>navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-border text-[9px]">↵</kbd>
              <span>select</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-foreground">COMMAND INTERFACE // ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
