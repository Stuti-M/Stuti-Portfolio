import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Radio,
  TreePine,
  Activity,
  Layers,
  Terminal,
  ShieldAlert,
  Zap,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Gauge,
  Sliders,
  Sparkles,
  GitBranch,
  Workflow,
  MapPin,
  Binary,
  Code2,
} from "lucide-react";
import { MarvelFloatingParticles } from "../components/MarvelFloatingParticles";
import { ArcReactorIcon } from "../components/MarvelIcons";
import { EngineeringLogModal } from "../components/EngineeringLog";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work & Systems | Iron Man Protocol — Stuti Mohapatra" },
      {
        name: "description",
        content: "Stark Engineering HUD: AI, IoT, Edge Computing, and Multi-Agent project systems.",
      },
    ],
  }),
  component: WorkPage,
});

interface ProjectSystem {
  id: string;
  buildCode: string;
  title: string;
  subtitle: string;
  systemType: string;
  category: string;
  status: "ACTIVE_DEVELOPMENT" | "DEPLOYED_HACKATHON" | "IN_PROGRESS" | "VERIFIED_PODIUM";
  statusLabel: string;
  statusColor: string;
  achievement?: string;
  specifications: {
    hardware?: string;
    ai?: string;
    communication?: string;
    backend?: string;
    pipeline?: string;
    database?: string;
  };
  problem: string;
  engineeringApproach: string;
  technologies: string[];
  result: string;
  impactMetrics?: { label: string; value: string }[];
  deepLink?: string;
  deepLinkLabel?: string;
}

const PROJECT_SYSTEMS: ProjectSystem[] = [
  {
    id: "smart-safety-watch",
    buildCode: "BUILD_001",
    title: "SMART SAFETY WATCH",
    subtitle: "AI-Powered Offline Emergency Wearable with Decentralized Mesh Routing",
    systemType: "AUTONOMOUS WEARABLE & MESH TELEMETRY",
    category: "AI • EMBEDDED • IoT",
    status: "ACTIVE_DEVELOPMENT",
    statusLabel: "STATUS // ACTIVE PROTOTYPE",
    statusColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    specifications: {
      hardware: "ESP32 / Arduino / MPU6050 Accelerometer",
      ai: "TinyML / Edge Impulse Quantized Neural Model",
      communication: "LoRa Mesh (868/915 MHz) / MQTT Protocol",
      backend: "Java / Spring Boot / REST API Dispatcher",
    },
    problem:
      "Commercial SOS apps require constant internet connectivity and active manual interaction. In cellular blackouts, deep forests, or violent distress events where the user cannot reach their phone, standard emergency systems fail entirely.",
    engineeringApproach:
      "Engineered an autonomous edge wearable system executing local quantized TinyML models directly on ESP32 firmware to identify distress movement anomalies without cloud latency. Emergency alerts hop autonomously across a sub-GHz LoRa mesh network until hitting an internet-connected gateway, which dispatches telemetry to a Spring Boot service.",
    technologies: ["TinyML", "ESP32", "Embedded C++", "LoRa Mesh", "Java", "Spring Boot", "MQTT", "Edge Impulse"],
    result:
      "Successfully running on-device inference under 45ms with 0% cellular dependency during local mesh transmission tests.",
    impactMetrics: [
      { label: "EDGE INFERENCE LATENCY", value: "< 45ms" },
      { label: "CELLULAR RELIANCE", value: "0% (Decentralized)" },
      { label: "RADIO FREQUENCY", value: "868 / 915 MHz" },
    ],
    deepLink: "/building",
    deepLinkLabel: "Inspect Full 7-Node Kinetic Lab 🕷️",
  },
  {
    id: "sentinel-x",
    buildCode: "BUILD_002",
    title: "SENTINEL-X",
    subtitle: "Multi-Agent AI System for Autonomous Illegal Deforestation Detection",
    systemType: "MULTI-AGENT ORCHESTRATION & ACOUSTIC TRIAGE",
    category: "AGENTIC AI • GROQ • SPATIAL",
    status: "DEPLOYED_HACKATHON",
    statusLabel: "STATUS // 🥈 2ND PLACE PODIUM",
    statusColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    achievement: "🥈 2nd Place — Anant Chakra Agentic AI Hackathon (Genesis 2K26)",
    specifications: {
      pipeline: "Acoustic Sensor Stream & Geo-Spatial Clusters",
      ai: "Groq Llama-3-70B High-Speed LLM Inference",
      communication: "Autonomous Multi-Agent Handshake (n8n)",
      backend: "Python / REST API Verification Services",
    },
    problem:
      "Forest protection squads suffer massive false alarm rates from environmental noise (wind, wildlife) and cannot manually analyze acoustic feeds across hundreds of square kilometers of protected reserves.",
    engineeringApproach:
      "Architected an autonomous multi-agent pipeline using n8n and Groq LLMs. The system splits telemetry across specialized agents: an Acoustic Ingestion Agent isolates chainsaw signatures, a Triage Agent eliminates false triggers, and a Geo-Verification Agent formats and escalates geo-tagged alerts directly to field responders.",
    technologies: ["Multi-Agent AI", "Groq LLM", "n8n Orchestration", "Python", "Spatial Telemetry", "REST APIs"],
    result:
      "Awarded 2nd Place Runner-Up at Anant Chakra Agentic AI Hackathon (Chakravyuh & Genesis 2K26) for exceptional multi-agent architecture and high-velocity inference.",
    impactMetrics: [
      { label: "HACKATHON PODIUM", value: "🥈 2nd Place" },
      { label: "INFERENCE SPEED", value: "Groq Accelerated" },
      { label: "AGENT PIPELINE", value: "3 Autonomous Nodes" },
    ],
    deepLink: "/achievements",
    deepLinkLabel: "View Hackathon Podium Dossier 🛡️",
  },
  {
    id: "prabandh-drishti",
    buildCode: "BUILD_003",
    title: "PRABANDH-DRISHTI // GEOGRIEVANCE-AI",
    subtitle: "Automated Civic Infrastructure Monitoring & Geo-Spatial Triage Engine",
    systemType: "COMPUTER VISION & SPATIAL TRIAGE",
    category: "CV • GEOSPATIAL • FASTAPI",
    status: "IN_PROGRESS",
    statusLabel: "STATUS // ACTIVE ARCHITECTURE",
    statusColor: "text-sky-500 border-sky-500/30 bg-sky-500/10",
    specifications: {
      hardware: "Mobile Optical Capture / Geo-Tagged Streams",
      ai: "Computer Vision Defect Classification",
      communication: "Geo-Spatial Coordinate Mapping",
      backend: "FastAPI / PostgreSQL / React Dashboard",
    },
    problem:
      "Municipal civic maintenance systems face unorganized citizen grievances with duplicated reports, vague location data, and lack of visual severity assessment.",
    engineeringApproach:
      "Developing an automated civic triage pipeline combining image classification for structural damage (potholes, water leaks, broken grid lines) with spatial clustering algorithms that automatically deduplicate nearby reports and assign priority queues to municipal departments.",
    technologies: ["Python", "FastAPI", "Computer Vision", "PostgreSQL", "Geo-Spatial APIs", "React"],
    result:
      "Core computer vision classifier and spatial coordinate clustering engine currently in active local testing.",
    impactMetrics: [
      { label: "CLASSIFIER FOCUS", value: "Civic Road & Grid" },
      { label: "DEDUPLICATION", value: "Spatial Coordinate Match" },
      { label: "BACKEND STACK", value: "FastAPI + Postgres" },
    ],
    deepLink: "/building",
    deepLinkLabel: "Inspect Civic Node in Idea Network 🕷️",
  },
  {
    id: "shecodex-engine",
    buildCode: "BUILD_004",
    title: "SHECODEX ALGORITHMIC ENGINE",
    subtitle: "High-Performance Data Structures & Competitive Problem Solving System",
    systemType: "ALGORITHMIC COMPLEXITY & SYSTEM LOGIC",
    category: "DSA • JAVA • SYSTEM LOGIC",
    status: "VERIFIED_PODIUM",
    statusLabel: "STATUS // 🥈 2ND PLACE PODIUM",
    statusColor: "text-pink-500 border-pink-500/30 bg-pink-500/10",
    achievement: "🥈 2nd Place — SheCodex Women's Day Coding Challenge (CODEX Club)",
    specifications: {
      hardware: "Low-overhead Memory Execution",
      ai: "Deterministic Optimization & State Pruning",
      communication: "Strict Test Harness & Benchmark Suites",
      backend: "Java / Python Core Computational Engine",
    },
    problem:
      "Complex systems require rock-solid algorithmic guarantees on memory and runtime to prevent degradation under high-load concurrency and graph scale.",
    engineeringApproach:
      "Applied structured algorithmic design patterns including dynamic programming memoization, multi-source BFS/DFS graph traversals, and custom heap priority queues to achieve optimal asymptotic complexity during competitive sprints.",
    technologies: ["Java", "Python", "Algorithms", "Data Structures", "Dynamic Programming", "Graph Theory"],
    result:
      "Secured 2nd Place in the SheCodex Women's Day Coding Challenge against university-wide engineering competitors.",
    impactMetrics: [
      { label: "COMPETITIVE PODIUM", value: "🥈 2nd Place" },
      { label: "LANGUAGE FOCUS", value: "Java & Python" },
      { label: "PROBLEM DOMAINS", value: "Graphs & DP" },
    ],
    deepLink: "/skills",
    deepLinkLabel: "Inspect DSA Target Reticle 🏹",
  },
];

function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectSystem>(PROJECT_SYSTEMS[0]);
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <div className="theme-ironman page-enter min-h-screen py-20 px-3 sm:px-6 bg-grid-subtle relative overflow-hidden font-body">
      {/* 🦾 Stark Floating Particles */}
      <MarvelFloatingParticles theme="building" />

      {/* Stark Hot-Rod Red & Arc Gold Ambient Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 h-[550px] w-[800px] rounded-full bg-primary/15 blur-[150px] neon-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/3 left-10 h-80 w-80 rounded-full bg-secondary/15 blur-[130px] arc-pulse"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Stark HUD System Top Header Bar */}
        <div className="mb-10 rounded-2xl border border-primary/30 bg-card/70 p-4 sm:p-6 backdrop-blur-md relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/80">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary border border-primary/30 shrink-0">
                <ArcReactorIcon className="h-5 w-5 arc-pulse" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-primary uppercase font-bold">
                  STARK INDUSTRIES // HUD INTERFACE
                </span>
                <p className="font-display text-base sm:text-lg font-extrabold text-foreground">
                  ENGINEERING ARTIFACTS & SYSTEM BUILDS
                </p>
              </div>
            </div>

            {/* Live Telemetry Metadata */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-muted/40 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>DIAGNOSTICS: NOMINAL</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-primary/30 bg-primary/10 text-primary font-bold">
                <Zap className="h-3 w-3" />
                <span>ARC CORE // 100%</span>
              </span>
              <button
                onClick={() => setIsLogOpen(true)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold transition hover:bg-amber-500 hover:text-white cursor-pointer"
              >
                <Terminal className="h-3 w-3" />
                <span>VIEW BUILD LOGS</span>
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
            <span>OPERATOR // STUTI MOHAPATRA</span>
            <span className="hidden sm:inline">ARCHITECTURE // EDGE AI × MULTI-AGENT × EMBEDDED</span>
            <span>BUILD STAGE // 2026.09</span>
          </div>
        </div>

        {/* Project Selector System HUD Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {PROJECT_SYSTEMS.map((proj) => {
            const isSelected = selectedProject.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`text-left p-4 rounded-xl border transition-all relative overflow-hidden group cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/15 shadow-md ring-2 ring-primary/40"
                    : "border-border bg-card/60 hover:border-primary/60 hover:bg-card/90 text-muted-foreground"
                }`}
              >
                {/* Laser Scanning Line traveling on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[starkScanLine_2s_linear_infinite] z-10"
                />

                {/* Technical Corner Brackets */}
                <span className="absolute top-1 left-1 font-mono text-[8px] text-primary/40 group-hover:text-primary transition">┌</span>
                <span className="absolute top-1 right-1 font-mono text-[8px] text-primary/40 group-hover:text-primary transition">┐</span>
                <span className="absolute bottom-1 left-1 font-mono text-[8px] text-primary/40 group-hover:text-primary transition">└</span>
                <span className="absolute bottom-1 right-1 font-mono text-[8px] text-primary/40 group-hover:text-primary transition">┘</span>

                <div className="flex items-center justify-between font-mono text-xs mb-1.5 relative z-10">
                  <span className={`font-bold tracking-wider ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
                    {proj.buildCode}
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${proj.statusColor}`}>
                    ● {proj.status === "DEPLOYED_HACKATHON" || proj.status === "VERIFIED_PODIUM" ? "PODIUM" : proj.status === "ACTIVE_DEVELOPMENT" ? "PROTOTYPE" : "ACTIVE"}
                  </span>
                </div>

                <h2 className="font-display text-sm sm:text-base font-extrabold text-foreground tracking-tight relative z-10 truncate">
                  {proj.title}
                </h2>
                <p className="font-mono text-[10px] text-muted-foreground mt-0.5 truncate relative z-10">
                  {proj.category}
                </p>

                {/* Technical Metadata Snippet */}
                <div className="mt-3 pt-2 border-t border-border/60 text-[10px] font-mono space-y-0.5 relative z-10">
                  <div className="flex justify-between text-muted-foreground">
                    <span>STACK:</span>
                    <span className="text-foreground font-semibold truncate max-w-[110px]">{proj.technologies.slice(0, 2).join(" / ")}</span>
                  </div>
                  <div className="pt-1 flex items-center justify-between text-primary font-bold">
                    <span>[ INSPECT BUILD ]</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                )}
              </button>
            );
          })}
        </div>

        {/* MAIN FEATURED PROJECT SYSTEM ARTIFACT PANEL */}
        <div className="rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-10 shadow-xl relative overflow-hidden mb-12">
          {/* Top HUD Glow line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* System Spec Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-border/80">
            <div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs mb-1.5">
                <span className="font-bold px-2 py-0.5 rounded bg-primary text-primary-foreground">
                  {selectedProject.buildCode}
                </span>
                <span className="text-primary font-bold uppercase">{selectedProject.systemType}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground uppercase">{selectedProject.category}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                {selectedProject.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-primary mt-1">
                {selectedProject.subtitle}
              </p>
              {selectedProject.achievement && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">
                  <span>★</span>
                  <span>{selectedProject.achievement}</span>
                </div>
              )}
            </div>

            <div className="text-right">
              <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${selectedProject.statusColor}`}>
                {selectedProject.statusLabel}
              </span>
            </div>
          </div>

          {/* CUSTOM ARCHITECTURE VISUALIZATION PER PROJECT */}
          <div className="my-6 p-5 rounded-xl border border-primary/30 bg-muted/20 relative overflow-hidden">
            <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground mb-3 pb-2 border-b border-border/60">
              <span className="flex items-center gap-1.5 text-primary font-bold uppercase">
                <Workflow className="h-3.5 w-3.5" />
                SYSTEM ARCHITECTURE & EXECUTION FLOW
              </span>
              <span>LIVE TELEMETRY TRACE</span>
            </div>

            {/* 1. Smart Safety Watch: Hardware Sensor & Telemetry Flow */}
            {selectedProject.id === "smart-safety-watch" && (
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-xs text-center">
                <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/5 flex flex-col justify-between">
                  <p className="text-[10px] text-amber-500 font-bold">01. CAPTURE</p>
                  <p className="font-bold text-foreground my-1">MPU6050 Gyro</p>
                  <p className="text-[10px] text-muted-foreground">3-Axis Sensor Stream</p>
                </div>
                <div className="p-3 rounded-lg border border-primary/40 bg-primary/10 flex flex-col justify-between">
                  <p className="text-[10px] text-primary font-bold">02. FIRMWARE</p>
                  <p className="font-bold text-foreground my-1">ESP32 Core</p>
                  <p className="text-[10px] text-muted-foreground">Embedded C++ logic</p>
                </div>
                <div className="p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 flex flex-col justify-between">
                  <p className="text-[10px] text-emerald-500 font-bold">03. EDGE AI</p>
                  <p className="font-bold text-foreground my-1">TinyML Model</p>
                  <p className="text-[10px] text-emerald-500 font-semibold">&lt; 45ms Anomaly Infer</p>
                </div>
                <div className="p-3 rounded-lg border border-sky-500/40 bg-sky-500/10 flex flex-col justify-between">
                  <p className="text-[10px] text-sky-500 font-bold">04. MESH RELAY</p>
                  <p className="font-bold text-foreground my-1">LoRa 868/915MHz</p>
                  <p className="text-[10px] text-muted-foreground">Sub-GHz RF Multi-Hop</p>
                </div>
                <div className="p-3 rounded-lg border border-purple-500/40 bg-purple-500/10 flex flex-col justify-between">
                  <p className="text-[10px] text-purple-500 font-bold">05. INGESTION</p>
                  <p className="font-bold text-foreground my-1">Spring Boot</p>
                  <p className="text-[10px] text-muted-foreground">MQTT Broker Dispatch</p>
                </div>
              </div>
            )}

            {/* 2. Sentinel-X: Multi-Agent AI Orchestration Graph */}
            {selectedProject.id === "sentinel-x" && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-xs text-center">
                <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 flex flex-col justify-between">
                  <p className="text-[10px] text-emerald-500 font-bold">AGENT 01</p>
                  <p className="font-bold text-foreground my-1">Acoustic Ingestion</p>
                  <p className="text-[10px] text-muted-foreground">Chainsaw Audio Stream</p>
                </div>
                <div className="p-3 rounded-lg border border-primary/40 bg-primary/10 flex flex-col justify-between">
                  <p className="text-[10px] text-primary font-bold">AGENT 02</p>
                  <p className="font-bold text-foreground my-1">Groq Llama-3 Triage</p>
                  <p className="text-[10px] text-primary font-semibold">Sub-second Noise Filter</p>
                </div>
                <div className="p-3 rounded-lg border border-sky-500/40 bg-sky-500/10 flex flex-col justify-between">
                  <p className="text-[10px] text-sky-500 font-bold">ORCHESTRATOR</p>
                  <p className="font-bold text-foreground my-1">n8n Agentic Bus</p>
                  <p className="text-[10px] text-muted-foreground">Cooperating Handoffs</p>
                </div>
                <div className="p-3 rounded-lg border border-amber-500/40 bg-amber-500/10 flex flex-col justify-between">
                  <p className="text-[10px] text-amber-500 font-bold">AGENT 03</p>
                  <p className="font-bold text-foreground my-1">Geo-Verification</p>
                  <p className="text-[10px] text-amber-500 font-semibold">Field Ranger Alert</p>
                </div>
              </div>
            )}

            {/* 3. Prabandh-Drishti: Geospatial & CV Damage Matrix */}
            {selectedProject.id === "prabandh-drishti" && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-xs text-center">
                <div className="p-3 rounded-lg border border-sky-500/30 bg-sky-500/5 flex flex-col justify-between">
                  <p className="text-[10px] text-sky-500 font-bold">INPUT LAYER</p>
                  <p className="font-bold text-foreground my-1">Citizen Capture</p>
                  <p className="text-[10px] text-muted-foreground">Mobile Geo-Tagged Stream</p>
                </div>
                <div className="p-3 rounded-lg border border-primary/40 bg-primary/10 flex flex-col justify-between">
                  <p className="text-[10px] text-primary font-bold">AI CLASSIFIER</p>
                  <p className="font-bold text-foreground my-1">Computer Vision</p>
                  <p className="text-[10px] text-primary font-semibold">Potholes & Grid Faults</p>
                </div>
                <div className="p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 flex flex-col justify-between">
                  <p className="text-[10px] text-emerald-500 font-bold">SPATIAL CLUSTER</p>
                  <p className="font-bold text-foreground my-1">GIS Deduplication</p>
                  <p className="text-[10px] text-muted-foreground">Nearby Report Merging</p>
                </div>
                <div className="p-3 rounded-lg border border-purple-500/40 bg-purple-500/10 flex flex-col justify-between">
                  <p className="text-[10px] text-purple-500 font-bold">ACTION QUEUE</p>
                  <p className="font-bold text-foreground my-1">FastAPI + Postgres</p>
                  <p className="text-[10px] text-muted-foreground">Department Dispatch</p>
                </div>
              </div>
            )}

            {/* 4. SheCodex: Algorithmic System Logic & State Space */}
            {selectedProject.id === "shecodex-engine" && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-xs text-center">
                <div className="p-3 rounded-lg border border-pink-500/30 bg-pink-500/5 flex flex-col justify-between">
                  <p className="text-[10px] text-pink-500 font-bold">PROBLEM SPEC</p>
                  <p className="font-bold text-foreground my-1">Constraint Analysis</p>
                  <p className="text-[10px] text-muted-foreground">Input Boundaries & Scale</p>
                </div>
                <div className="p-3 rounded-lg border border-primary/40 bg-primary/10 flex flex-col justify-between">
                  <p className="text-[10px] text-primary font-bold">DATA STRUCTURES</p>
                  <p className="font-bold text-foreground my-1">Graphs & Heaps</p>
                  <p className="text-[10px] text-primary font-semibold">Multi-Source Traversals</p>
                </div>
                <div className="p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 flex flex-col justify-between">
                  <p className="text-[10px] text-emerald-500 font-bold">OPTIMIZATION</p>
                  <p className="font-bold text-foreground my-1">Dynamic Programming</p>
                  <p className="text-[10px] text-muted-foreground">O(N) Complexity Pruning</p>
                </div>
                <div className="p-3 rounded-lg border border-amber-500/40 bg-amber-500/10 flex flex-col justify-between">
                  <p className="text-[10px] text-amber-500 font-bold">BENCHMARK</p>
                  <p className="font-bold text-foreground my-1">Zero-Defect Suite</p>
                  <p className="text-[10px] text-amber-500 font-semibold">🥈 2nd Place Podium</p>
                </div>
              </div>
            )}
          </div>

          {/* PROBLEM → APPROACH → TECHNOLOGIES → RESULT */}
          <div className="space-y-6">
            {/* Step 1: PROBLEM */}
            <div className="p-4 sm:p-5 rounded-xl border border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-500 uppercase mb-1.5">
                <span>01 // THE SYSTEM PROBLEM</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-body">
                {selectedProject.problem}
              </p>
            </div>

            {/* Step 2: ENGINEERING APPROACH */}
            <div className="p-4 sm:p-5 rounded-xl border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase mb-1.5">
                <Cpu className="h-4 w-4" />
                <span>02 // ENGINEERING APPROACH & ARCHITECTURE</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-body">
                {selectedProject.engineeringApproach}
              </p>
            </div>

            {/* Step 3: TECHNOLOGY */}
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                03 // TECHNOLOGY STACK & LIBRARIES
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="chip-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Step 4: RESULT & IMPACT */}
            <div className="p-4 sm:p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>04 // SYSTEM RESULT & VERIFIED MILESTONE</span>
              </div>
              <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed font-body">
                {selectedProject.result}
              </p>

              {/* Metrics bar */}
              {selectedProject.impactMetrics && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-emerald-500/20 font-mono text-xs">
                  {selectedProject.impactMetrics.map((metric) => (
                    <div key={metric.label} className="p-2 rounded-lg bg-card/80 border border-border">
                      <p className="text-[10px] text-muted-foreground">{metric.label}</p>
                      <p className="font-bold text-foreground mt-0.5">{metric.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Deep link action */}
          {selectedProject.deepLink && (
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-end">
              <Link
                to={selectedProject.deepLink}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-primary hover:underline"
              >
                <span>{selectedProject.deepLinkLabel}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-border/80 pt-6 font-mono text-xs">
          <Link to="/building" className="font-semibold text-muted-foreground hover:text-primary transition flex items-center gap-1">
            <span>← 02 BUILD // Spider-Man Network 🕷️</span>
          </Link>
          <Link to="/experience" className="font-semibold text-primary hover:underline flex items-center gap-1">
            <span>04 EXPERIENCE // Hulk Gamma Impact 💚</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <EngineeringLogModal isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} />
    </div>
  );
}
