import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Crosshair, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { LeetCodeProgress } from "../components/LeetCodeProgress";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Precision Toolbox & Skills | Hawkeye Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Hawkeye Ronin Protocol: Precision targeting system across AI/ML, Embedded, Backend, and Frontend.",
      },
    ],
  }),
  component: SkillsPage,
});

interface TargetCategory {
  id: string;
  code: string;
  label: string;
  focusArea: string;
  accuracy: string;
  skills: { name: string; tag: string; description: string }[];
}

const TARGET_SYSTEMS: TargetCategory[] = [
  {
    id: "target-aiml",
    code: "TARGET // 01",
    label: "AI / ML & EDGE INTELLIGENCE",
    focusArea: "Quantized Models & Autonomous Multi-Agent Systems",
    accuracy: "HIGH PRECISION",
    skills: [
      { name: "TinyML", tag: "Microcontroller AI", description: "Quantized on-device anomaly detection models" },
      { name: "Edge Impulse", tag: "DSP & Training", description: "Embedded neural network profiling & deployment" },
      { name: "Multi-Agent AI", tag: "Orchestration", description: "Autonomous cooperative agent workflows" },
      { name: "Groq LLMs", tag: "High-Speed Inference", description: "High-velocity Llama-3 model pipelines via n8n" },
      { name: "Python", tag: "Core AI Language", description: "NumPy, Pandas, model evaluation and scripting" },
      { name: "Computer Vision", tag: "Spatial Defect Classifiers", description: "Image classification & coordinate tagging" },
    ],
  },
  {
    id: "target-embedded",
    code: "TARGET // 02",
    label: "EMBEDDED & IoT PROTOCOLS",
    focusArea: "Firmware, Microcontrollers & RF Mesh Telemetry",
    accuracy: "FIELD DEPLOYED",
    skills: [
      { name: "ESP32 / Arduino", tag: "Microcontrollers", description: "Firmware logic, GPIO sensor streams, interrupts" },
      { name: "Embedded C++", tag: "Hardware Firmware", description: "Low-overhead microcontroller programming" },
      { name: "LoRa Mesh", tag: "Sub-GHz RF", description: "868/915 MHz decentralized long-range hopping" },
      { name: "Meshtastic", tag: "Packet Standard", description: "Decentralized mesh telemetry protocol" },
      { name: "MQTT Broker", tag: "Pub/Sub Bridge", description: "Lightweight base station message queues" },
    ],
  },
  {
    id: "target-backend",
    code: "TARGET // 03",
    label: "BACKEND & SYSTEMS INFRASTRUCTURE",
    focusArea: "Enterprise APIs, Telemetry Gateways & Databases",
    accuracy: "PRODUCTION GRADE",
    skills: [
      { name: "Java", tag: "Core Enterprise", description: "Object-oriented systems, concurrency, robust logic" },
      { name: "Spring Boot", tag: "Microservice Framework", description: "RESTful APIs, MQTT consumer pipelines" },
      { name: "REST APIs", tag: "Integration", description: "Clean endpoint contracts, JSON schemas, auth" },
      { name: "PostgreSQL", tag: "Relational DB", description: "Geo-spatial coordinate indexing & queries" },
      { name: "n8n Automation", tag: "Workflow Engine", description: "Self-hosted webhook and agent pipelines" },
    ],
  },
  {
    id: "target-frontend",
    code: "TARGET // 04",
    label: "FRONTEND & WEB INTERFACES",
    focusArea: "Modern Responsive SPAs & State Management",
    accuracy: "CERTIFIED PRECISION",
    skills: [
      { name: "JavaScript / TypeScript", tag: "Web Scripting", description: "Modern ES6+, strong type safety, async DOM" },
      { name: "HTML5 & Semantic CSS3", tag: "Certified Web", description: "Clean semantic markup, layout hierarchy" },
      { name: "Tailwind CSS", tag: "Utility Styling", description: "Design systems, dark modes, animations" },
      { name: "Responsive Design", tag: "Cross-Device UI", description: "Fluid viewports, touch vs pointer UX" },
      { name: "Git & GitHub", tag: "Version Control", description: "Branching workflows, pull requests, CI/CD" },
    ],
  },
  {
    id: "target-dsa",
    code: "TARGET // 05",
    label: "CORE DSA & PROBLEM SOLVING",
    focusArea: "Algorithmic Complexity, Graphs, DP & System Logic",
    accuracy: "CONTINUOUS TARGET",
    skills: [
      { name: "Data Structures", tag: "Foundations", description: "Trees, Graphs, Heaps, Hash Tables, Linked Lists" },
      { name: "Algorithms", tag: "Complexity", description: "BFS/DFS, Dynamic Programming, Two Pointers, Greedy" },
      { name: "Problem Solving", tag: "Competitive Coding", description: "2nd Place SheCodex & Daily LeetCode" },
      { name: "Multi-Agent System Design", tag: "Architecture", description: "Distributed agent handoffs and verification" },
    ],
  },
];

function SkillsPage() {
  const [selectedTargetId, setSelectedTargetId] = useState<string>("target-aiml");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const activeTarget = TARGET_SYSTEMS.find((t) => t.id === selectedTargetId) || TARGET_SYSTEMS[0];

  return (
    <div className="theme-hawkeye page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body">
      {/* 🏹 Hawkeye Precision Particles */}
      <MarvelFloatingParticles theme="hawkeye" />

      {/* Crosshair Target Reticle Backdrop Graphic */}
      <div className="pointer-events-none absolute right-[5%] top-28 opacity-15 select-none">
        <div className="relative flex items-center justify-center">
          {[460, 320, 180, 80].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-primary/70"
              style={{ width: size, height: size }}
            />
          ))}
          <div className="absolute h-[480px] w-[1px] bg-primary/60" />
          <div className="absolute w-[480px] h-[1px] bg-primary/60" />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Hawkeye Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-primary font-bold">
            <Crosshair className="h-4 w-4" />
            <span>RONIN PROTOCOL // PRECISION TARGETING SYSTEM</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Technical Stack & Target Reticle
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-base leading-relaxed font-body">
            Zero inflated percentage bars. Select any target vector to lock the crosshairs and inspect verified tools, frameworks, and system foundations.
          </p>
        </div>

        {/* TARGETING RETICLE SELECTOR BUTTONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
          {TARGET_SYSTEMS.map((target) => {
            const isSelected = selectedTargetId === target.id;
            return (
              <button
                key={target.id}
                onClick={() => setSelectedTargetId(target.id)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 font-mono relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/15 shadow-sm scale-102 ring-2 ring-primary/40 text-foreground"
                    : "border-border bg-card/70 hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="text-primary font-bold">{target.code}</span>
                  {isSelected && <Crosshair className="h-3 w-3 text-red-500 animate-spin [animation-duration:10s]" />}
                </div>
                <p className="text-xs font-bold text-foreground leading-snug">{target.label}</p>
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE TARGET LOCK-ON RADAR PANEL */}
        <div className="rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-8 shadow-sm relative overflow-hidden mb-12">
          {/* Target Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-border/80">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-bold px-2 py-0.5 rounded bg-primary text-primary-foreground">
                  {activeTarget.code}
                </span>
                <span className="text-primary font-bold tracking-wider">LOCKED ON TARGET</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-1">
                {activeTarget.label}
              </h2>
              <p className="font-mono text-xs text-muted-foreground mt-0.5">{activeTarget.focusArea}</p>
            </div>

            <div className="flex items-center gap-3">
              {hoveredSkill && (
                <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-red-500 bg-red-500/10 border border-red-500/30 px-2.5 py-1 rounded-md animate-[targetReticleLock_0.3s_ease-out]">
                  <Crosshair className="h-3 w-3 animate-spin [animation-duration:6s]" />
                  <span>TARGET LOCK: {hoveredSkill}</span>
                </div>
              )}
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
                ● {activeTarget.accuracy}
              </span>
            </div>
          </div>

          {/* Targeted Technologies Grid with Reticle Lock Mechanics */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeTarget.skills.map((skill) => {
              const isTargeted = hoveredSkill === skill.name;
              return (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`group p-4 rounded-xl border transition-all duration-200 relative overflow-hidden cursor-crosshair ${
                    isTargeted
                      ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/40 scale-[1.02]"
                      : "border-border bg-muted/20 hover:border-primary/60 hover:bg-card"
                  }`}
                >
                  {/* Targeting Crosshair Lines on Hover */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-200 ${
                      isTargeted ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                    }`}
                  >
                    <div className="absolute top-1.5 left-1.5 font-mono text-[9px] text-purple-400 font-bold">┌</div>
                    <div className="absolute top-1.5 right-1.5 font-mono text-[9px] text-purple-400 font-bold">┐</div>
                    <div className="absolute bottom-1.5 left-1.5 font-mono text-[9px] text-purple-400 font-bold">└</div>
                    <div className="absolute bottom-1.5 right-1.5 font-mono text-[9px] text-purple-400 font-bold">┘</div>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-primary mb-1">
                    <span className="font-bold">{skill.tag}</span>
                    <span className={`font-mono text-[9px] flex items-center gap-1 transition-opacity ${isTargeted ? "text-red-500 opacity-100 font-bold" : "opacity-0 group-hover:opacity-100 text-muted-foreground"}`}>
                      <Crosshair className="h-2.5 w-2.5" />
                      <span>{isTargeted ? "TARGET ACQUIRED" : "VERIFIED"}</span>
                    </span>
                  </div>
                  <p className="font-display text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* REAL-TIME LEETCODE RADAR WITH HAWKEYE PRECISION STYLING */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-primary" />
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              REAL-TIME ALGORITHMIC TARGETING // LEETCODE TELEMETRY
            </p>
          </div>
          <LeetCodeProgress username="Stuti_Mohapatra" />
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/80 pt-6">
          <Link to="/experience" className="text-xs font-mono font-semibold text-muted-foreground hover:text-primary transition">
            ← 04 EXPERIENCE // Hulk Gamma 💚
          </Link>
          <Link to="/achievements" className="text-xs font-mono font-semibold text-primary hover:underline flex items-center gap-1">
            <span>06 ACHIEVEMENTS // Captain America 🛡️</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
