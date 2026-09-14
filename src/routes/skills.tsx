import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target } from "lucide-react";
import { LeetCodeProgress } from "../components/LeetCodeProgress";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Toolbox & Skills | Hawkeye Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Languages, frameworks, tools and live LeetCode stats for Stuti Mohapatra.",
      },
    ],
  }),
  component: SkillsPage,
});

const TECH_CATEGORIES = ["ALL", "LANGUAGES", "AI / ML", "BACKEND / APIS", "TOOLS", "CORE"] as const;

const SKILLS_DATA = [
  { name: "Python", category: "LANGUAGES" },
  { name: "Java", category: "LANGUAGES" },
  { name: "JavaScript", category: "LANGUAGES" },
  { name: "HTML5", category: "LANGUAGES" },
  { name: "CSS3", category: "LANGUAGES" },
  { name: "Embedded C++", category: "LANGUAGES" },
  { name: "AI/ML Fundamentals", category: "AI / ML" },
  { name: "TinyML", category: "AI / ML" },
  { name: "Multi-Agent Systems", category: "AI / ML" },
  { name: "Groq LLMs", category: "AI / ML" },
  { name: "Edge Impulse", category: "AI / ML" },
  { name: "Spring Boot", category: "BACKEND / APIS" },
  { name: "REST APIs", category: "BACKEND / APIS" },
  { name: "MQTT", category: "BACKEND / APIS" },
  { name: "n8n", category: "TOOLS" },
  { name: "Tailwind CSS", category: "TOOLS" },
  { name: "Responsive Web Design", category: "TOOLS" },
  { name: "Git & GitHub", category: "TOOLS" },
  { name: "Data Structures & Algorithms", category: "CORE" },
  { name: "Problem Solving", category: "CORE" },
  { name: "Multi-Agent System Design", category: "CORE" },
];

function SkillsPage() {
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>("ALL");

  const filteredSkills =
    selectedTechCategory === "ALL"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedTechCategory);

  return (
    <div className="theme-hawkeye page-enter min-h-screen py-24 px-4 sm:px-6 bg-grid-subtle relative overflow-hidden">
      {/* 🏹 Hawkeye Precision Target Glowing Moving Particles */}
      <MarvelFloatingParticles theme="hawkeye" />

      {/* Target Reticle Backdrop */}
      <div className="pointer-events-none absolute right-[5%] top-40 opacity-15">
        <div className="relative flex items-center justify-center">
          {[420, 280, 160, 60].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-primary/60"
              style={{ width: size, height: size }}
            />
          ))}
          <div className="absolute h-[440px] w-[1px] bg-primary/50" />
          <div className="absolute w-[440px] h-[1px] bg-primary/50" />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Skills Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🏹</span>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              RONIN PROTOCOL // PRECISION TOOLBOX
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Technical Repertoire & DSA
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-base">
            No inflated percentage bars — just the verified tools, frameworks, and algorithmic foundations I actively engineer with.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTechCategory(cat)}
              className={`font-mono text-xs font-semibold px-4 py-2 rounded-xl border transition ${
                selectedTechCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-xs"
                  : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
          {filteredSkills.map((s) => (
            <div
              key={s.name}
              className="group p-4 rounded-xl border border-border bg-card hover:border-primary transition-all duration-200"
            >
              <p className="font-mono text-[10px] text-muted-foreground uppercase">{s.category}</p>
              <p className="text-sm font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                {s.name}
              </p>
            </div>
          ))}
        </div>

        {/* Live LeetCode Progress Component */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-primary" />
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              REAL-TIME PROBLEM SOLVING ACTIVITY
            </p>
          </div>
          <LeetCodeProgress username="Stuti_Mohapatra" />
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/70 pt-6">
          <Link to="/experience" className="text-xs font-semibold text-muted-foreground hover:text-primary transition">
            ← View Industry Experience 💚
          </Link>
          <Link to="/achievements" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <span>Explore Achievements & Podiums 🛡️</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
